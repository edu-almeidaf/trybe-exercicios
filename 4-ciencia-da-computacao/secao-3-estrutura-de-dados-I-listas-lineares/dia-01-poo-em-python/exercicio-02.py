from collections import Counter
from typing import List


class Estatistica:
    def __init__(self, numbers: List[int]) -> None:
        self.numbers = numbers

    def media(self) -> float:
        return sum(self.numbers) / len(self.numbers)

    def mediana(self) -> float:
        numbers = sorted(self.numbers)
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return numbers[index - 1] + numbers[index] / 2
        return numbers[index]

    def moda(self) -> int:
        number, _ = Counter(self.numbers).most_common()[0]
        return number
