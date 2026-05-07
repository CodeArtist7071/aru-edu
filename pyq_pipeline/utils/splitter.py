import re

class QuestionSplitter:
    def __init__(self):
        # Patterns for common question numbering
        self.patterns = [
            r'(?m)^(\d+[\.\)]\s*)',           # 1. or 1) at start of line (flexible space)
            r'(?m)^(Q\d+[\.\)]?\s*)',         # Q1. or Q1 at start of line
            r'(?m)^(Question\s+\d+[\.\)]?\s*)', # Question 1 at start of line
            r'(?m)^(\(\d+\)\s*)'               # (1) at start of line
        ]
        
        # Pattern for options to help identify question boundaries
        self.option_pattern = r'\s*([A-D])[\.\)]\s+'

    def split(self, text):
        """
        Splits text into individual question blocks.
        """
        if not text:
            return []

        # Find the best pattern match
        best_pattern = None
        max_matches = 0
        
        for p in self.patterns:
            matches = re.findall(p, text)
            if len(matches) > max_matches:
                max_matches = len(matches)
                best_pattern = p
        
        if not best_pattern or max_matches < 2:
            # Fallback: if we can't find a clear pattern, maybe it's just one question or messy
            # Try splitting by any number at start of line
            fallback_pattern = r'(?m)^(\d+[\.\)\s])'
            if len(re.findall(fallback_pattern, text)) >= 2:
                best_pattern = fallback_pattern
            else:
                return [text.strip()]

        # Perform the split
        # We use re.split with capturing groups to keep the delimiters
        parts = re.split(best_pattern, text)
        
        blocks = []
        if parts:
            # First part is usually junk before the first question
            header = parts[0].strip()
            
            # Process pairs of (delimiter, content)
            for i in range(1, len(parts), 2):
                delimiter = parts[i]
                content = parts[i+1] if i+1 < len(parts) else ""
                blocks.append((delimiter + content).strip())
        
        return blocks

    def is_mcq(self, block):
        """
        Checks if a block looks like an MCQ (has at least 2 options).
        """
        options = re.findall(self.option_pattern, block)
        return len(options) >= 2

    def extract_basic_mcq(self, block):
        """
        Attempts to extract Q and A-D options using regex.
        Returns a dict if successful, None otherwise.
        """
        # Simple extraction logic
        # Split block into question part and options part
        parts = re.split(self.option_pattern, block)
        if len(parts) < 3: # Need at least one delimiter (which is an option label)
            return None
            
        question_text = parts[0].strip()
        # Remove the initial number from question text if present
        question_text = re.sub(r'^(\d+[\.\)]\s+)|^(Q\d+[\.\)]?\s+)', '', question_text).strip()
        
        options = {}
        for i in range(1, len(parts), 2):
            label = parts[i].upper()
            value = parts[i+1].strip() if i+1 < len(parts) else ""
            # Stop at the next line or multiple spaces
            value = re.split(r'\n\n|\s{4,}', value)[0].strip()
            options[label] = value
            
        if len(options) >= 2:
            return {
                "q": question_text,
                "opt": options
            }
        return None

if __name__ == "__main__":
    splitter = QuestionSplitter()
    test_text = """
    SSC CGL EXAM 2024
    1. What is the value of 2+2?
    A) 3
    B) 4
    C) 5
    D) 6
    
    2. Which planet is known as the Red Planet?
    (A) Mars (B) Jupiter (C) Venus (D) Saturn
    
    End of Page 1
    """
    
    blocks = splitter.split(test_text)
    for i, b in enumerate(blocks):
        print(f"--- Block {i+1} ---")
        print(b)
        parsed = splitter.extract_basic_mcq(b)
        if parsed:
            print("Parsed:", parsed)
