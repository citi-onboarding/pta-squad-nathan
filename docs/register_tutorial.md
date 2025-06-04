# Guia Teórico - Cadastro de Pacientes Veterinários

## Introdução
Este sistema permite cadastrar pacientes animais de forma rápida. Segue o tutorial completo:

---

## 🖥️ Tela Principal de Cadastro

![Tela de cadastro](/assets/register-screen.png)

### Como Preencher:
1. **Dados do Animal**:
   - Nome do Pet: Digite o nome completo;
   - Espécie: Selecione com os ícones (cão, gato, etc);
   - Gênero: Selecione o gênero (fêmea ou macho);
   - Data de Nascimento: Digite a data de nascimento do paciente (pode ser a data aproximada).

2. **Dados do Tutor**:
   - Nome do Dono: Nome completo do responsável.

3. **Detalhes da Consulta**:
   - Selecione tipo, médico, data e horário;
   - Descreva os sintomas na caixa de texto.

4. **Finalizar**:
   - Clique no botão verde "Finalizar Cadastro".

---

## ✨ Modal de Confirmação

Após clicar em "Cadastrar", aparecerá esta janela de confirmação:

![Modal da tela de cadastro](/assets/register-modal-screen.png)

### O que acontece:
✅ **Cadastro concluído** - Os dados são salvos no sistema.

### Opções disponíveis:
- 📧 "Enviar" → Volta para a tela inicial e **Envia o comprovante** de agendamento para o e-mail fornecido.
- "X" (canto superior) → Fecha o modal.

---

## ❓ Ajuda Rápida

### Sobre o Comprovante:
- É enviado automaticamente para o e-mail fornecido;
- Contém as informações da consulta;
- Serve como lembrete para o tutor.

### Problemas Comuns:
🛑 **Não recebeu o e-mail?**
1. Verifique a caixa de SPAM;
2. Confira se o e-mail foi digitado corretamente;
3. Caso persista, contate o suporte técnico.

🛑 **Erro no cadastro?**
- Feche o modal para corrigir os dados corretamente e certifique-se de preencher todos os campos obrigatórios.

---

## ⏱️ Fluxo Completo:
```mermaid
graph TD
    A[Preencher formulário] --> B[Validar dados]
    B --> C[Enviar cadastro]
    C --> D{Abrir modal}
    D --> E[Enviar comprovante]
    E --> F[Fechar modal]
