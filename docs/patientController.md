# 🕹️ Documentação da Classe RegisterController

## Visão Geral
Esta documentação apresenta a estrutura e o funcionamento da classe `RegisterController`, utilizada para gerenciar o cadastro de animais utilizando Express. A classe implementa a interface `Crud` e faz uso da classe auxiliar `Citi` para realizar operações no banco de dados.

---

## Dependências
- `express`: Framework;
-  **`Request` e `Response`**: Tipagens do Express para manipulação de requisições e respostas HTTP.
- `Citi`: Classe utilitária para operações de banco de dados;
- `Crud`: Interface que define as operações básicas.

---

## 🧩 Estrutura da Classe RegisterController

### Construtor

```tsx
constructor(private readonly citi = new Citi("Patient", "idPaciente")) {}
```

**O que faz:**
- Cria uma instância do Citi configurada para trabalhar com:
  - Tabela: `Patient` (pacientes animais);
  - Campo ID: `idPaciente`.

**Consultas Relacionadas:**  
Ao criar ou atualizar um paciente, também é possível registrar ou modificar uma **consulta** vinculada a ele.

---

## Método para Calcular a Idade do Paciente

### `calculateAge(birthDate: string): number`
Método privado que calcula a idade do animal com base na data de nascimento.

**Parâmetro:**
- `birthDate`: String no formato 'YYYY-MM-DD' representando a data de nascimento.

**Retorno:**
- Número inteiro representando a idade em anos.

---

### 🆕 `post(request: Request, response: Response)`

**Campos obrigatórios no body:**
- `name`: Nome do animal;
- `tutorName`: Nome do tutor;
- `age`: Data de nascimento no formato 'YYYY-MM-DD';
- `species`: Espécie do animal;
- `gender`: Sexo do animal.

**Validações:**
- Verifica se todos os campos obrigatórios foram fornecidos;
- Valida o formato do campo `age`.

**Respostas:**
- 400: Campos inválidos ou faltando;
- Outros códigos conforme retornado pelo `citi.insertIntoDatabase`.

### 📋 `get(request: Request, response: Response)`
Obtém todos os registros de animais do banco de dados.

**Respostas:**
- Retorna array com todos os registros de animais;
- Status HTTP conforme retornado pelo `citi.getAll`.

### ❌ `delete(request: Request, response: Response)`
Remove um registro de animal do banco de dados.

**Parâmetros de URL:**
- `idPaciente`: ID numérico do animal a ser removido.

**Respostas:**
- Status HTTP conforme retornado pelo `citi.deleteValue`;
- Mensagem de confirmação ou erro.

### 🔄 `update(request: Request, response: Response)`
Atualiza os dados de um animal existente no banco de dados.

**Parâmetros de URL:**
- `idPaciente`: ID numérico do animal a ser atualizado.

**Campos no body:**
- `name`: Nome do animal;
- `tutorName`: Nome do tutor/responsável;
- `age`: Data de nascimento no formato 'YYYY-MM-DD';
- `species`: Espécie do animal;
- `gender`: Sexo do animal.

**Validações:**
- Verifica o formato do campo `age`.

---

## Modelo de Dados
O objeto paciente possui a seguinte estrutura:
```typescript
{
  name: string,         // Nome do animal
  tutorName: string,    // Nome do tutor
  age: number,          // Idade calculada em anos
  species: string,      // Espécie do animal
  gender: string        // Sexo do animal
}
```

## Exemplo de Uso
Criar um novo animal:
```json
POST /patients
Content-Type: application/json

{
  "name": "Rex",
  "tutorName": "João Silva",
  "age": "2018-05-15",
  "species": "DOG",
  "gender": "MALE"
}
```

---

## Observações

1. Cálculo de Idade: A idade é automaticamente calculada com base na data de nascimento fornecida no campo `age`.

2. Formato de Data: O campo `age` deve sempre seguir o formato 'YYYY-MM-DD' para o cálculo correto da idade.

3. Geração de ID: O ID do animal (`idPaciente`) é gerado automaticamente pelo banco de dados.
