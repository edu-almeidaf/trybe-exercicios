trybe_course = ["Introdução", "Front-end", "Back-end"]

# 5. Adicione o elemento “Ciência da Computação” à lista.
trybe_course.append("Ciência da Computação")

# 6. Acesse e altere o primeiro elemento da lista para “Fundamentos”.
trybe_course[0] = "Fundamentos"

# -------------------------------------------------
# Um conjunto ou set pode ser inicializado utilizando-se também o método set(). Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima a variável e confira se o retorno é: {‘seu_nome’}
var = set()
var.add("Eduardo de Almeida Fernandes")
var

# -------------------------------------------------
info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# 8. Insira no objeto uma nova propriedade com o nome de chave “recorrente” e o valor “Sim”. Em seguida, imprima o objeto no console.
info["recorrente"] = "Sim"

# 9. Remova a propriedade cuja chave é “origem” e imprima o objeto no console.
del info["origem"]

# -------------------------------------------------
# 10. Após uma consulta do banco de dados, temos linhas que contém nome, sobrenome e idade como: "Thiago", "Nobre", 29. Que estrutura vista anteriormente seria recomendada dado que após esta consulta somente exibimos estes valores?
# R: A estrutura recomendada é a tuple. Caso houvesse necessidade de editar os valores ou adicionar mais valores, usaríamos uma list.

# 11. Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual é a estrutura mais recomendada para o armazenamento desta contagem?
# R: A estrutura mais recomendada para armazenar a contagem da frequência que um elemento aparece em uma sequência é o Dict. Veja abaixo uma possível solução para essa questão:
my_array = [20, 20, 1, 2]

freq_dict = {}

for item in my_array:
    if item in freq_dict:
        freq_dict[item] += 1
    else:
        freq_dict[item] = 1

for key, valor in freq_dict.items():
    print(f"{key} : {valor}")

# -------------------------------------------------
# 12. O Fatorial de um número inteiro é representado pela multiplicação de todos os números predecessores maiores que 0. Por exemplo, o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5. Escreva um código que calcule o fatorial de um número inteiro.
# Forma 1:
number = 5
counter = 1
result = 1

while counter <= number:
    result = result * counter
    counter += 1
result

# Forma 2:
number = 5
result = 1

for factor in range(1, number + 1):
    result *= factor
result

# 13. Um sistema de avaliações registra valores de 0 a 10 para cada avaliação. Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10]. Escreva um código capaz de gerar as avaliações após a mudança. Neste caso o resultado deveria ser [60, 80, 50, 90, 100].
# Forma 1:
ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)

new_ratings

# Forma 2:
ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]
new_ratings

# 14. Percorra a lista do exercício 13 e imprima “Múltiplo de 3” se o elemento for divisível por 3.
ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    if (rating % 3) == 0:
        print(f"{rating} é múltiplo de 3")
