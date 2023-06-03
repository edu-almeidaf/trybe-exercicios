-- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'Eduardo', 'de Almeida Fernandes', 'Pitanga-PR', 24;

-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS, que é chamado de alias na linguagem SQL (alias é como um apelido no português);
SELECT 'Eduardo' AS first_name, 'de Almeida Fernandes' AS last_name, 'Pitanga-PR' AS born_city, 24 AS age;

-- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;
SELECT 13 * 8;

-- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome “Data Atual”.
SELECT NOW() AS 'Data Atual';

-- Escreva uma query que selecione todos os registros da tabela city;
SELECT * FROM sakila.city;

-- Escreva uma query que exiba apenas os registros das colunas first_name e last_name da tabela customer;
SELECT first_name, last_name FROM sakila.customer;

-- Escreva uma query que exiba todos os registros da tabela rental;
SELECT * FROM sakila.rental;

-- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;
SELECT title, description, release_year FROM sakila.film;


-- Na tabela sakila.film, monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.
SELECT CONCAT(title, ' - ', release_year) AS 'Lançamento do FIlme'
FROM sakila.film;

-- Na tabela sakila.address, monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.
SELECT CONCAT(address, ', ', district) AS 'Endereço'
FROM sakila.address;

-- Monte uma query para encontrar pares únicos de nomes e idades.
SELECT DISTINCT Nome, Idade FROM Escola.Estudantes;

-- Quantas linhas você encontraria na query anterior?
5

-- Monte uma query para encontrar somente os nomes únicos.
SELECT DISTINCT Nome FROM Escola.Estudantes;

-- Quantas linhas você encontraria na query anterior?
4

-- Monte uma query para encontrar somente as idades únicas.
SELECT DISTINCT Nome, Idade FROM Escola.Estudantes;

-- Quantas linhas você encontraria na query anterior?
4

-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT * FROM sakila.film;

-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
SELECT title, release_year, rating FROM sakila.film;

-- Quantos filmes temos cadastrados?
SELECT COUNT(*) FROM sakila.film;

-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
SELECT DISTINCT last_name FROM sakila.actor;

-- Quantos sobrenomes únicos temos na tabela?
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;

-- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
SELECT * FROM sakila.actor
ORDER BY last_name, first_name DESC;

-- Crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

-- Selecione todos os dados da tabela. Pronto, fez isso? 1.1 Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes, incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de substituição. Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT title, release_year, length, rating, replacement_cost
FROM sakila.film
ORDER BY length DESC, replacement_cost
LIMIT 20;
