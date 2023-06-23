# PROJETO FINANÇAS EM EQUILÍBRIO
Olá! Seja bem-vindo ao nosso projeto utilizando uma **API** própria

Alunos da **Ironhack**:

<p>💸 Andre Poli </p>
<p>💸 João Vitor Frascione</p>
<p>💸 Lucas Padueli</p>


---

<img src="https://media.istockphoto.com/id/1049658918/photo/mobile-banking-network.jpg?s=612x612&w=0&k=20&c=IxP4nfRjkNdAlVSkjh61hg-rPm7RpCCsaZ5ZEh-K2BM=" width="50%" height="50%">

Aperte [aqui](https://financas-em-equilibrio.netlify.app/) para conhecer nosso projeto


---

## Introdução

<p>A partir desse projeto, você pode realizar o seu cadastro e começar a controlar suas finanças!!!</p>
<p>É possível incluir, excluir, editar, visualizar gastos e receitas e também checar seu extrato de acordo com o mês e ano, para um maior equilíbrio financeiro</p>

Mais informações sobre o projeto [aqui](https://docs.google.com/presentation/d/1UsfmRUnx_2rP177CvI04Qv27_KoHYowC/edit?usp=sharing&ouid=102402208015115289834&rtpof=true&sd=true)

---


## Páginas
    💰 Sobre nós
    💰 Cadastro
    💰 Login
    💰 Extrato
    💰 Receitas
    💰 Despesas


---

## Por vir
- Novas páginas
- Novas imagens
- Novos campos
- Novas funções de filtro
- Calculadora
- Informações perfil


---

## Endpoints

| **Method** | **Endpoint**      | **Body**   | **Response** | **Action**                            |
|------------|-------------------|------------|--------------|----------------------------------------|
| POST       | /income           | { income } | { income }   | Criar uma receita no banco de dados    |
| GET        | /incomes          | -/-        | [{ income }] | Lista de receitas                      |
| GET        | /income/:incomeId | -/-        | { income }   | Devolve uma receita                    |
| PUT        | /income/:incomeId | { income } | { income }   | Atualiza uma receita no banco de dados |
| DELETE     | /income/:incomeId | -/-        | message      | Remove uma receita do banco de dados   |


| **Method** | **Endpoint**      | **Body**   | **Response** | **Action**                            |
|------------|-------------------|------------|--------------|----------------------------------------|
| POST       | /outcome            | { outcome } | { outcome }   | Criar uma despesa no banco de dados    |
| GET        | /outcomes           | -/-         | [{ outcome }] | Lista de despesas                      |
| GET        | /outcome/:outcomeId | -/-         | { outcome }   | Devolve uma despesas                   |
| PUT        | /outcome/:outcomeId | { outcome } | { outcome }   | Atualiza uma despesa no banco de dados |
| DELETE     | /outcome/:outcomeId | -/-         | message       | Remove uma despesa do banco de dados   |


| **Method** | **Endpoint**      | **Body**   | **Response** | **Action**                            |
|------------|-------------------|------------|--------------|----------------------------------------|
| POST       | /statement           | { statement } | { statement }   | Criar um extrato no banco de dados    |
| GET        | /statements          | -/-        | [{ statement }] | Lista de extratos                      |
| PUT        | /statement/:year | -/- | { statement }          | Filtra o extrato por ano no banco de dados |
| PUT        | /statement/:month | -/- | { statement }          | Filtra o extrato por mês no banco de dados |
| DELETE     | /statement/:statementId | -/-        | message      | Remove um extrato do banco de dados   |
