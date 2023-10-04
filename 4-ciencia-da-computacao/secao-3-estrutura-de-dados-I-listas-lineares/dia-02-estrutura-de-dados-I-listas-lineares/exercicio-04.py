# Maneira 1:
# def students_in_instant(arrivals, departures, time_instant):
#     answer = 0
#     size = len(arrivals)
#     for index in range(size):
#         if arrivals[index] <= time_instant <= departures[index]:
#             answer += 1
#     return answer


# Maneira 2:
def students_in_instant(arrivals, departures, time_instant):
    return sum(
        arrival <= time_instant <= departure
        for arrival, departure in zip(arrivals, departures)
    )

# O algoritmo realiza um for, portanto possui Complexidade de Tempo O(n).
