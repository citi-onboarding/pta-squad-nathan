# Documentação da Classe RegisterController

Esta documentação apresenta a estrutura e o funcionamento da classe `RegisterController`, utilizada para gerenciar o cadastro de animais utilizando Express. A classe implementa a interface `Crud` e faz uso da classe auxiliar `Citi` para realizar operações no banco de dados.

---


## 📦 Importações Necessárias

```ts
import { Request, Response } from "express";
import { Citi, Crud } from "../global";
```

- **`Request` e `Response`**: Tipagens do Express para manipulação de requisições e respostas HTTP.
- **`Citi`**: Classe utilitária para abstrair operações com o banco de dados.
- **`Crud`**: Interface que define a estrutura obrigatória de métodos CRUD.

---


## 🧩 Estrutura da Classe RegisterController

### 🔧 Construtor

```ts
constructor(private readonly citi = new Citi("Animal")) {}
```

Instancia a classe `Citi`, utilizando "Animal" como entidade base para as operações no banco de dados.

---


### 🆕 `create`

```ts
create = async (request: Request, response: Response)
```

- **Objetivo**: Criar um novo registro de animal no banco de dados.
- **Validação**: Verifica se todos os campos obrigatórios foram preenchidos.

---


### 📋 `get`

```ts
get = async (request: Request, response: Response)
```

- **Objetivo**: Listar todos os registros de animais.

---


### ❌ `delete`

```ts
delete = async (request: Request, response: Response)
```

- **Objetivo**: Remover um animal do banco de dados com base no seu `id` (passado por parâmetro na URL).

---


### 🔄 `update`

```ts
update = async (request: Request, response: Response)
```

- **Objetivo**: Atualizar os dados de um animal existente no banco de dados.
- **Parâmetros**:
  - `id`: Identificador do animal (extraído da URL).
  - Novos dados no corpo da requisição.

---


## 📑 Campos Esperados para um Animal

Abaixo estão listados os campos que devem ser informados no corpo das requisições `create` e `update`:

- `patientName`: Nome do animal;
- `tutorName`: Nome do tutor;
- `patientSpecies`: Espécie do animal;
- `patientAge`: Idade do animal;
- `typeConsultation`: Tipo da consulta;
- `responsibleDoctor`: Nome do médico veterinário responsável;
- `dateService`: Data agendada para o atendimento;
- `timeService`: Horário do atendimento;
- `problemDescription`: Descrição do problema relatado.
