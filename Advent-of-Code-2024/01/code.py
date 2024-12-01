file_path = "/home/gap/Documents/Advent-of-Code/Advent-of-Code-2024/01/input.txt"

listing = []
try:
    with open(file_path, "r") as file:
        data = file.read()
        listing.append(data.split("\n"))
except FileNotFoundError:
    print(f"File not found: {file_path}. Please ensure it exists.")


list_1 = []
list_2 = []

for elem in listing[0]:
    first = elem.split(" ")[0]
    second = elem.split(" ")[-1]
    if first is not "":
        list_1.append(int(first))
        list_2.append(int(second))

list_1 = sorted(list_1)
list_2 = sorted(list_2)

result = 0

dict_1 = {}
dict_2 = {}

for elem_1, elem_2 in zip(list_1, list_2):
    # result += abs(elem_1 - elem_2)
    if elem_1 in dict_1:
        dict_1[elem_1] += 1
    else:
        dict_1[elem_1] = 1

    if elem_2 in dict_2:
        dict_2[elem_2] += 1
    else:
        dict_2[elem_2] = 1

for key in (set(dict_1.keys()) & set(dict_2.keys())):
    result += key * dict_1[key] *  dict_2[key]

print(result)
