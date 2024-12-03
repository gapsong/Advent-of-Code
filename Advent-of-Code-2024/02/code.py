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


def is_safe_check(my_list):
    if sorted(my_list) != my_list and sorted(my_list, reverse=True) != my_list:
        return False
    for i in range(len(my_list) - 1):
        diff = abs(my_list[i] - my_list[i + 1])
        if diff < 1 or diff > 3:
            return False
    return True


for sample in listing[:-1]:
    cur = 0
    sample_list = sample.split(" ")
    sample_list = [int(item) for item in sample_list[:]]

    if is_safe_check(sample_list):
        result += 1
    else:
        for i in range(len(sample_list)):
            copy = sample_list[:]
            del copy[i]
            if is_safe_check(copy):
                result += 1
                print(copy)
                break

print(result)
