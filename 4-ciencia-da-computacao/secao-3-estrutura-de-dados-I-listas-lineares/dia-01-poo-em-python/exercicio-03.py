from typing import Union
from abc import ABC, abstractmethod
from math import pi as PI


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self) -> Union[int, float]:
        raise NotImplementedError

    @abstractmethod
    def perimetro(self) -> Union[int, float]:
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, base: int, altura: int) -> None:
        self.base = base
        self.altura = altura

    def area(self) -> Union[int, float]:
        return self.base * self.altura

    def perimetro(self) -> Union[int, float]:
        return 2 * (self.base + self.altura)


class Circulo(FiguraGeometrica):
    def __init__(
        self,
        raio: int,
    ) -> None:
        self.raio = raio

    def area(self) -> Union[int, float]:
        return PI * self.raio * self.raio

    def perimetro(self) -> Union[int, float]:
        return 2 * PI * self.raio
