from linked_list_content import LinkedList
from rich import print

if __name__ == "__main__":
    my_linked_list = LinkedList()

    my_linked_list.insert_first('Eduardo')
    my_linked_list.insert_first('Ju')
    my_linked_list.insert_first('Rai')
    my_linked_list.insert_first('Italo')
    my_linked_list.insert_first('Sherly')
    my_linked_list.insert_first('Kenia')

    print(my_linked_list.get_mid_element())
