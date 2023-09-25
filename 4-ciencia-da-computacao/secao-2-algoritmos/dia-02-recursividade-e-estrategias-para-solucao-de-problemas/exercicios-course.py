def sum_previous(num):
    if num == 0:
        return 0
    else:
        print(num)
        return num + sum_previous(num - 1)

sum_previous(4)