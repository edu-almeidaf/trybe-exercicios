import math


# 01:
def maior_numero(a, b):
    if a > b:
        return a
    return b


# 02:
def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


# 03:
def draw_square(n):
    for row in range(n):
        print(n * '*')


# 04:
def find_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


# 05:
def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price


# 06:
def type_of_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3 and
        side1 + side3 > side2 and
        side2 + side3 > side1
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isóceles"
    else:
        return "escaleno"
