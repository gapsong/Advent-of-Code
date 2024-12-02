from pathlib import Path

file_path = Path(__file__).parent / "input.txt"

listing = []
try:
    with open(file_path, "r") as file:
        data = file.read()
        listing = data.split("\n")
except FileNotFoundError:
    print(f"File not found: {file_path}. Please ensure it exists.")


result = 0
for sample in listing[:-1]:
    cur = 0
    sample_list = sample.split(" ")
    sample_list = [int(item) for item in sample_list[:]]

    if sorted(sample_list) != sample_list and sorted(sample_list, reverse=True) != sample_list:
        continue

    for i in range(len(sample_list) - 1):
        diff = abs(sample_list[i] - sample_list[i + 1])
        if diff < 1 or diff > 3:
            break
    else:
        if max(sample_list) == sample_list[-1] and min(sample_list) == sample_list[0] or min(sample_list) == sample_list[-1] and max(sample_list) == sample_list[0]:
            result += 1

print(result)
