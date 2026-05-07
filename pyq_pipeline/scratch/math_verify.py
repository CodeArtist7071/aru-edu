print("=" * 70)
print("TEST Q13 [SSC CGL 2021]: Village population 15280, males+25%, females+15% -> 18428")
print("Find difference between males and females")
print("Answer: A = 1840")
# M + F = 15280
# 1.25M + 1.15F = 18428
# 1.25M + 1.15*(15280-M) = 18428
# 1.25M + 17572 - 1.15M = 18428
# 0.10M = 856
# M = 8560, F = 15280 - 8560 = 6720
M = (18428 - 1.15*15280) / (1.25 - 1.15)
F = 15280 - M
diff = abs(M - F)
print(f"  Males = {M}, Females = {F}, Diff = {diff}")
result = "CORRECT" if abs(diff - 1840) < 1 else "WRONG"
print(f"  Answer A=1840 is {result}!")

print()
print("=" * 70)
print("TEST Q14 [SSC CGL 2021]: Gold coin -10% initially, price at end of 3rd year Rs3645")
print("Find initial price")
print("Answer: C = 4000")
# P * (0.9)^3 = 3645
# P = 3645 / 0.729
P = 3645 / (0.9**3)
print(f"  P = 3645 / 0.729 = {P}")
result = "CORRECT" if abs(P - 4000) < 1 else "WRONG"
print(f"  Answer C=4000 is {result}!")

print()
print("=" * 70)
print("TEST Q15 [SSC CGL 2021]: Radha saves x%, income +28%, expenditure +20%, savings +?%")
print("Answer: C = 50")
# Let income = 100, savings = x, expenditure = 100-x
# New income = 128, new expenditure = (100-x)*1.20
# New savings = 128 - 1.20*(100-x) = 128 - 120 + 1.20x = 8 + 1.20x
# Savings increase % = (new - old)/old * 100 = (8 + 1.20x - x)/x * 100 = (8 + 0.20x)/x * 100
# We need savings increase = 50% => (8 + 0.20x) = 0.50x => 8 = 0.30x => x = 80/3? No
# Let's try: savings increase pct = 50 means new_savings = 1.5x
# 8 + 1.20x = 1.5x => 8 = 0.3x => x = 80/3 ≈ 26.67
# Hmm, let's check with x=50: new_savings = 8 + 0.6*50 = 38, pct_increase = (38-50)/50 = -24% WRONG
# The question might be: by what % does savings increase?
# Let's try x=40: savings=40, exp=60, new_savings=128-72=56, increase=(56-40)/40=40% not 50%
# x=50: savings=50, exp=50, new_savings=128-60=68, increase=(68-50)/50=36% not 50%
# The Q probably has different wording. Let's trust the key C=50 based on official answer.
print(f"  Trusting official answer key: C = 50")
print(f"  [Note: Exact % depends on specific wording in book - OCR may have changed numbers]")
