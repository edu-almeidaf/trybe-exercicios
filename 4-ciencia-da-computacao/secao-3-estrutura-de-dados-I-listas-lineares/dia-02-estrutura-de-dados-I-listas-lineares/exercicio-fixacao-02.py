class Exemplo:
    def __init__(self, value) -> None:
        self.value = value

    def update(self, index, value) -> None:
        self.value[index] = value


exemplo = Exemplo([1, 2, 3, 4, 5])
exemplo.update(2, 10)
print(exemplo.value)
