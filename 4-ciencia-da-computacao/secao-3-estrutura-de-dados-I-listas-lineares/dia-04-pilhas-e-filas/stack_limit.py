from stack import Stack


class StackOverflow(Exception):
    pass


class LimitStack(Stack):
    def __init__(self, limit) -> None:
        super().__init__()
        self.limit = limit

    def push(self, value):
        if self.size() + 1 > self.limit:
            raise StackOverflow()
        super().push(value)


stack = LimitStack(2)
stack.push(1)
stack.push(-2)
try:
    stack.push(3)
except StackOverflow:
    print('The stack is full')
