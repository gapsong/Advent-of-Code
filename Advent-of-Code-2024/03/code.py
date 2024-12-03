import re

file_path = "/home/gap/Documents/Advent-of-Code/Advent-of-Code-2024/03/input.txt"

input_string = ""
try:
    with open(file_path, "r") as file:
        data = file.read()
        print(data)
        input_string = data
except FileNotFoundError:
    print(f"File not found: {file_path}. Please ensure it exists.")


def calculate_mul_sum(input_data):
    # Regular expression to match valid mul(X,Y) patterns
    pattern = r"mul\(\s*(\d+)\s*,\s*(\d+)\s*\)"
    matches = re.findall(pattern, input_data)

    # Compute the sum of all valid multiplications
    total_sum = sum(int(x) * int(y) for x, y in matches)
    return total_sum


print(calculate_mul_sum(input_string))


def calculate_conditional_mul_sum(input_data):
    # Regular expressions to match patterns
    mul_pattern = r"mul\(\s*(\d+)\s*,\s*(\d+)\s*\)"
    control_pattern = r"\b(do|don't)\(\)"

    # Find all occurrences of `mul()` and `do()/don't()`
    mul_matches = [
        (match.start(), match.groups())
        for match in re.finditer(mul_pattern, input_data)
    ]
    control_matches = [
        (match.start(), match.group(1))
        for match in re.finditer(control_pattern, input_data)
    ]

    # Sort all matches by their position in the string
    all_matches = sorted(mul_matches + control_matches, key=lambda x: x[0])

    # Process matches
    mul_enabled = True  # By default, mul instructions are enabled
    total_sum = 0

    for _, match in all_matches:
        if isinstance(match, tuple):  # It's a mul(X,Y) instruction
            if mul_enabled:
                x, y = map(int, match)
                total_sum += x * y
        else:  # It's a control instruction
            mul_enabled = match == "do"

    return total_sum


# Example usage
result = calculate_conditional_mul_sum(input_string)
print("Total sum:", result)
