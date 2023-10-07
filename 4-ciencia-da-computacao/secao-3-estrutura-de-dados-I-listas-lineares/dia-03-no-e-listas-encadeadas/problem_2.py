from linked_list_guard import LinkedListGuard
from rich import print

if __name__ == "__main__":
    my_linked_list = LinkedListGuard()

    my_linked_list.insert_first('Eduardo')
    my_linked_list.insert_last('Ju')
    my_linked_list.insert_last('Rai')
    my_linked_list.insert_last('Sherly')

    print(my_linked_list)
    print(my_linked_list.head)
    print(my_linked_list.tail)
