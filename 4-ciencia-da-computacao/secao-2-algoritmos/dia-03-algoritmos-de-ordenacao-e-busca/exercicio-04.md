No bubble sort em um caso médio temos uma complexidade de O(n²),
o que significa que normalmente temos n² trocas,já o merge sort,
como utiliza dividir e conquistar, consegue ter uma complexidade
O(n log n) em média. Mesmo em um pior cenário, onde ao embaralharmos
os dois arrays, tornando-os inversamente ordenados, o merge sort
seria mais rápido, pois sua complexidade ainda seria O(n log n)
e o bubble sort teria complexidade quadrática O(n²).