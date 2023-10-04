def good_pairs(numbers):
    answer = 0
    i = 0
    size = len(numbers)
    for i in range(size):
        for j in range(i + 1, size):
            if numbers[i] == numbers[j]:
                answer += 1
    return answer

# O algoritmo realiza um for dentro de outro, portanto possui Complexidade de
# Tempo O(n²).
