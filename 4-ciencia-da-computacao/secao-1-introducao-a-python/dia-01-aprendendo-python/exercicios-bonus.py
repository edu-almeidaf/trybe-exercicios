# 01:
def minimum(numbers):
    return min(numbers)


# 02:
def draw_triangle(n):
    for row in range(1, n + 1):
        print(row * '*')


# 03:
def summation(limit):
    return sum(range(1, limit + 1))


# 04:
def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total
