import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function test() {
  const { data, error } = await supabase
    .from("questions")
    .select(`
      id,
      question_explanations (
        explanation_1,
        explanation_2,
        explanation_3,
        explanation_4
      )
    `)
    .limit(10);
  console.log("Error:", error);
  console.log("Data:", JSON.stringify(data, null, 2));
}

test();
