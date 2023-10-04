def shuffle(items):
    answer = []
    div_cards_by_two = len(items) // 2
    for offset in range(div_cards_by_two):
        answer.extend(items[offset::div_cards_by_two])
    return answer

# O algoritmo realiza um for, portanto possui Complexidade de Tempo O(n).
