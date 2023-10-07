from node import Node


class LinkedListGuard:
    def __init__(self):
        self.head = Node("HEAD")
        self.tail = self.head
        self.__length = 0

    def __repr__(self):
        return f"LinkedList(len={self.__length}, value={self.head})"

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head.next
        if self.head.next is None:
            self.tail = first_value

        self.head.next = first_value
        self.__length += 1

    def insert_last(self, value):
        last_value = Node(value)

        if self.is_empty():
            return self.insert_first(value)

        self.tail.next = last_value
        self.tail = last_value
        self.__length += 1

    def is_empty(self):
        return not self.__length

    def index_of(self, value):
        position = 1
        current_value = self.head.next
        while current_value != self.tail:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1


def delete_duplicates(linked_list):
    list_with_unique_elements = LinkedListGuard()

    while linked_list:
        current_node = linked_list.remove_first()
        if linked_list.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements
