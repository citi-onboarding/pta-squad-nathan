# ✉️ Documentação Geral - Envio de E-mail com Nodemailer e API Express

## Arquivo 1: MailHandler (serviço de envio de e-mail)

### Descrição
Este arquivo contém a função `MailHandler`, responsável por enviar e-mails usando o pacote Nodemailer. A função utiliza variáveis de ambiente para autenticação no Gmail e aceita dados do usuário para compor o e-mail.

### Dependências
- `nodemailer`: biblioteca para envio de e-mails;
- `dotenv`: para carregar variáveis de ambiente (EMAIL, PASSWORD).

### Função principal

#### `async function MailHandler(emailConfig)`

- **Parâmetros**: um objeto `emailConfig` com as propriedades:
  - `userName` (string): nome do usuário (usado diretamente no e-mail);
  - `userEmail` (string): endereço de e-mail do destinatário;
  - `subjectText` (string): assunto do e-mail;
  - `html` (string): conteúdo HTML do e-mail.

- **Funcionamento**: cria um transportador SMTP usando o serviço Gmail e as credenciais do `.env`, enviando o e-mail com as informações fornecidas.

---

## 📩 Arquivo 2: sendMail (endpoint Express para envio de e-mail)

### Descrição
Este arquivo define a função `sendMail`, que atua como um controlador para uma rota Express. Recebe os dados via requisição HTTP POST, monta a configuração do e-mail e chama `MailHandler` para enviar o e-mail.

### Dependências
- `MailHandler`: a função do primeiro arquivo para envio do e-mail;
- `mailTemplate`: função que retorna o conteúdo HTML do e-mail a partir do nome do usuário e nome do paciente.

### Função principal

#### `async function sendMail(req, res)`

- **Recebe**: um objeto `req` (request) contendo no corpo (`req.body`) as seguintes propriedades:
  - `userName` (string);
  - `userEmail` (string);
  - `subjectText` (string);
  - `patientName` (string).

- **Processo**:
  - Usa `mailTemplate(userName, patientName)` para gerar o corpo do e-mail;
  - Monta o objeto `emailConfig` com os dados necessários;
  - Chama `MailHandler` para enviar o e-mail.

---

## 📧 Arquivo 3: mailTemplate (template HTML do e-mail)

### Descrição
Esta função gera o conteúdo HTML do e-mail que será enviado ao usuário, com uma mensagem personalizada contendo o nome do usuário e do paciente.

### Função principal

#### `function mailTemplate(userName: string, nomePaciente: string): string`

- **Parâmetros**:
  - `userName` (string): nome do destinatário do e-mail;
  - `nomePaciente` (string): nome do paciente (animal) da consulta.

- **Retorno**: uma string HTML estilizada com a mensagem de confirmação da consulta.

---

## Observações

- É importante configurar as variáveis de ambiente `EMAIL` e `PASSWORD` no arquivo `.env` para que o envio funcione;
- O endpoint deve estar conectado ao Express para receber requisições POST.
