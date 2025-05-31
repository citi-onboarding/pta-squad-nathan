# Documentação do componente de detalhes
Este documento descreve o funcionamento do detalhamento da consulta. Ele é construído com React (Next.js) e Tailwind CSS, utilizando componentes personalizados e gerenciamento de estado via useState.

## Estrutura de arquivos:
```
/app/
/detalhes/page.tsx
/components/
 /Consultamodal.tsx
 /ConsultCard.tsx
 /Header.tsx
```

## Descrição geral:
A página details.tsx exibe os dados completos de uma consulta veterinária, com informações sobre o paciente, histórico de consultas e opção para agendar um novo atendimento via modal.
![image](https://github.com/user-attachments/assets/76ef7bdc-b8d7-4715-9c77-3dcfde0eab64)
![image](https://github.com/user-attachments/assets/98bf38ef-01f6-4c7d-a353-f29b2a53cb12)

## Componentes utilizados:
`Header`: Componente de cabeçalho principal do sistema.

``ConsultCard``: Componente para exibição de consultas passadas.

`ConsultaModal`: Modal com formulário simplificado de agendamento.

`Button`: Botão customizado com base no Tailwind.

## Página `Detalhes`
```export default function details() {...}```

## Estado
`const [openmodal, setOpenModal] = useState(false);`
Controla a visibilidade do modal de agendamento.

## Modal `ConsultaModal.tsx`
Modal exibido sobre a página com fundo escuro e efeito de desfoque. Estrutura principal:
`export default function ConsultaModal({ isOpen, setModalOpen }) {
  ...
}
`
## Estados e Refs
`const inputRef = useRef<HTMLInputElement>(null);
`
useRef usado para abrir o seletor de data via showPicker().

## Lógica de integração
`if (!isOpen) return null;`
Evita renderização do modal quando não está visível.


`onClick={() => setModalOpen(false)}
`
Fecha o modal ao clicar no ícone de fechar.

## Estilização
Estilos são definidos utilizando o Tailwind CSS.









