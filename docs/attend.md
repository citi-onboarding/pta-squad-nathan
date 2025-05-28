# Documentação do Componente [...]

Este documento descreve o funcionamento do componente de [...]. Ele é construído com **React** (Next.js) e **Tailwind CSS**, utilizando componentes personalizados e gerenciamento de estado via `useState`.

---

## 📁 Estrutura dos Arquivos:

```bash
/app/
  /page.tsx
  /layout.tsx
/components/
  /calendarBox.tsx
  /customButton.tsx
  /Header.tsx
  /switch.tsx
  /textBlock.tsx
```

---

## 📌 Descrição Geral:

Esta página implementa a tela de atendimento da aplicação e reúne os seguintes elementos e funcionalidades:

- **Estrutura da Tela:**  
  A página se ajusta a uma resolução fixa de 1920x1080px, garantindo um layout consistente para a interface de atendimento.

- **Cabeçalho (Header):**  
  - O componente **Header** é renderizado no topo, permitindo a navegação entre as seções "Atendimento" e "Cadastro".

- **Seção de Atendimento e Busca de Médico:**  
  - Exibe um título "Atendimento" e uma legenda "Qual é o médico?" para orientar o usuário.  
  - Contém um campo de **input** para pesquisa junto a um botão personalizado (**CustomButton**) com o texto "Buscar", que ativa a funcionalidade de busca (ou dispara uma ação de consulta).

- **Componente Switch:**  
  - Um **Switch** é utilizado para alternar entre as opções "Histórico" e "Agendamento", oferecendo controle rápido para visualizar diferentes modos de atendimento.

- **Calendário Personalizado:**  
  - Dois componentes **Calendar** (baseados em CalendarBox) estão disponíveis, cada um com seu botão exibindo uma data padrão "dd/mm/aa".  
  - A propriedade `popUpPosition` é utilizada para definir as coordenadas personalizadas, garantindo que cada calendário seja posicionado de forma relativa (nos extremos inferiores à direita, com um espaçamento previamente configurado).

- **Listagem de Consultas:**  
  - A página renderiza múltiplos **Textblock** para exibir os detalhes das consultas, incluindo informações como:
    - Nome do médico ("Dr. José Carlos")
    - Nome do pet ("Luna")
    - Nome do dono ("João Alves")
    - Data ("18/02")
    - Horário ("13:00")
    - Categoria da consulta ("Primeira Consulta")

- **Botão para Nova Consulta:**  
  - Um botão personalizado (**CustomButton**) com o texto "Nova Consulta" e um ícone de **Cross** é posicionado no canto inferior direito da tela, permitindo iniciar o cadastro de uma nova consulta.

---

```tsx
'use client';

import { useState } from "react";
import CustomButton from "@/components/ui/customButton";
import Header from "@/components/ui/Header";
import Textblock from "@/components/ui/textBlock";

import { Cross } from "@/assets";
import Switch from "@/components/ui/switch";
import Calendar from "@/components/ui/calendarBox";

export default function Home() {
  return (
    <div className="w-[1920px] h-[1080px]">
      <Header />

      <div className="flex items-center gap-4 ml-[194px] mt-[48px]">
        <h2 className="text-[48px] ml-[10.5px]">Atendimento</h2>
      </div>

      <div className="ml-[194px] mt-[32px]">
        <p className="text-[24px]">Qual é o médico?</p>

        <div className="flex items-center gap-6 mt-[26px]">
          <input
            placeholder="Pesquise aqui..."
            type="text"
            className="border-black w-[520px] h-[50px] border rounded-[8px] placeholder-[#D9D9D9] text-[16px] font-normal leading-[110%] tracking-[0%] pl-4"
          />
          <CustomButton
            text="Buscar"
            className="text-white bg-[#7D1AD7] hover:bg-[#690EB8] w-[116px] h-[42px] rounded-[24px] font-bold shadow-md"
          />
        </div>
      </div>

      <div className="mt-[40px] flex">
        <span className="ml-[194px] inline-block">
          <Switch primeiro="Histórico" segundo="Agendamento" />
        </span>
        <Calendar
          text="dd/mm/aa"
          className="ml-[1021px]"
          popUpPosition="absolute bottom-[70px] right-[120px]"
        />
        <Calendar
          text="dd/mm/aa"
          className="ml-[16px]"
          popUpPosition="absolute bottom-[70px] right-[5px]"
        />
      </div>

      <div className="flex flex-wrap gap-6 ml-[194px] mt-[32px]">
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
      </div>

      <CustomButton
        text="Nova Consulta"
        icon={Cross}
        className="text-white bg-[#50E678] hover:bg-[#3CBF62] w-[205px] h-[48px] rounded-[24px] font-bold shadow-md mt-[185px] ml-[1521px]"
      />
    </div>
  );
}

```

---

## 🧩 Componentes Utilizados:

- `calendarBox.tsx` 
- `customButton.tsx`
- `Header.tsx`
- `switch.tsx`
- `textBlock.tsx`

---

## calendarBox.tsx

O CalendarBox é um componente interativo que exibe um botão para abrir um calendário pop-up.
Usa useState para controlar a abertura (open).
O botão alterna entre abrir e fechar o calendário via toggleCalendar.
A propriedade popUpPosition permite posicionamento personalizado.
Se open for verdadeiro, exibe o ReactCalendar, que armazena a data selecionada (selectedDate).
Estilizado com bordas arredondadas, shadow-md e bg-white para melhor visibilidade.

```tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Calendar_icon } from "@/assets";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CalendarBoxProps {
  text: string;
  className?: string;
  popUpPosition?: string;
}

const CalendarBox: React.FC<CalendarBoxProps> = ({ 
  text, 
  className = "",
  popUpPosition = "absolute top-full left-0 mt-2" // valor padrão
}) => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const toggleCalendar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div 
        onClick={toggleCalendar} 
        className={`w-[126px] h-[56px] flex items-center justify-between border border-[#D9D9D9] rounded-[8px] bg-[#FFFFFF] pr-2 cursor-pointer ${className}`}
      >
        <span className="pl-2">{text}</span>
        <Image 
          src={Calendar_icon} 
          alt="Ícone Calendário" 
          className="w-[28px] h-[20px]" 
        />
      </div>
      {open && (
        <div className={`${popUpPosition} z-50 bg-white shadow-md p-4`}>
          <ReactCalendar value={selectedDate} />
        </div>
      )}
    </div>
  );
};

export default CalendarBox;

```

## customButton

O CustomButton é um componente reutilizável que cria um botão personalizado com suporte a ícones e estilização dinâmica.
Propriedades:
text: Define o texto do botão.
className: Permite personalizar estilos via Tailwind.
icon: Recebe uma imagem opcional a ser exibida antes do texto.
onClick: Função opcional acionada ao clicar no botão.
Estrutura e Estilização:
Usa flex items-center para alinhar o texto e o ícone.
rounded-[24px] garante bordas arredondadas.
shadow-md adiciona um efeito de sombra.

```tsx
import Image, { StaticImageData } from "next/image";
import React from "react";

interface CustomButtonProps {
  text: string;
  className?: string;
  icon?: StaticImageData;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, className = "", icon, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center w-auto px-8 py-2 text-center rounded-[24px] text-white font-bold shadow-md ${className}`}
    >
      {icon && (
        <Image
          src={icon} 
          alt="Ícone Botão" 
          className="w-[20px] h-[20px] mr-[12px]"  
        />
      )}
      {text}
    </button>
  );
}

export default CustomButton;

```

## Header.tsx

O Header é um componente de cabeçalho que gerencia a navegação entre as seções Atendimento e Cadastro, além de exibir elementos visuais como logotipos e botões.
Navegação Dinâmica:
Usa useState para controlar a aba ativa (active).
O usuário pode alternar entre "Atendimento" e "Cadastro" ao clicar nos respectivos botões.
Quando uma aba está ativa, uma linha verde aparece abaixo do texto para indicar a seleção.
Posicionamento e Layout:
O logo principal é alinhado à esquerda com pl-8.
Os botões de navegação são centralizados usando absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2.
O grupo de botões (Buttongroups) é posicionado à direita com ml-auto pr-8.
O rodapé do cabeçalho tem uma linha divisória w-full h-[2px] bg-[#D9D9D9] para separação visual.

```tsx
'use client';
import Image from "next/image";
import { useState } from "react";
import {LeftContent} from "@/assets";
import {Buttongroups} from "@/assets"





export default function Header() {
  const [active, setActive] = useState("atendimento");
  return (
    <>
    <div className=" gap-x-3 pb-[20px] pt-[20px] flex h-[114px]  flex-row  relative items-center bg-[#FFFFFF]">
     
      <Image className="pl-8 w-[200px] h-[74px]" src={LeftContent} alt="Logo" />
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-[42px] w-[196px] gap-x-[48px] flex-row justify-start items-center">

        <div className= " flex flex-col items-center cursor pointer" onClick={() => setActive("atendimento")}>
        <h2>Atendimento</h2>
        {active === "atendimento" && (
            <div className="w-full h-1 bg-green-500 rounded" />
          )}
        </div>

        <div className= "flex flex-col items-center cursor pointer" onClick={() => setActive("cadastro")}>
        <h2>Cadastro</h2>
        {active === "cadastro" && (
            <div className="w-full h-1 bg-green-500 rounded" />
          )}
        </div>
        
      </div>

      <div className="ml-auto pr-8">
        <Image className="w-[220px] h-[24px] gap-x-[8px]" src={Buttongroups} alt="Logo" />
      </div>

      </div>

      <div className="w-full h-[2px] bg-[#D9D9D9]"></div>
      </>
      
    
  );
}
```

## switch.tsx

O Switch é um componente que alterna entre duas opções (primeiro e segundo), permitindo ao usuário selecionar entre elas.
Usa useState para armazenar a opção ativa.
Cada opção funciona como um botão clicável, alternando o estado ao ser pressionada.
Estilizado com bordas arredondadas, efeito de destaque na opção selecionada e distribuição flexível.

```tsx
import React, { useState } from "react";

interface SwitchProps {
  primeiro: string;
  segundo: string;
}

const Switch: React.FC<SwitchProps> = ({ primeiro, segundo }) => {
  const [active, setActive] = useState<"primeiro" | "segundo">("primeiro");

  return (
    <div className="w-[243px] h-[58px] bg-[#F0F0F0] rounded-[12px] flex justify-center items-center gap-[5px]">

      <div onClick={() => setActive("primeiro")} className="cursor-pointer">
        <div
          className={`inline-flex items-center justify-center px-4 py-2.5 rounded-[8px] ${
            active === "primeiro" ? "bg-[#FFFFFF]" : "bg-transparent"
          }`}
        >
          <p>{primeiro}</p>
        </div>
      </div>

      <div onClick={() => setActive("segundo")} className="cursor-pointer">
        <div
          className={`inline-flex items-center justify-center px-[12px] py-2.5 rounded-[8px] ${
            active === "segundo" ? "bg-[#FFFFFF]" : "bg-transparent"
          }`}
        >
          <p>{segundo}</p>
        </div>
      </div>
    </div>
  );
};

export default Switch;

```

## textBlock.tsx

O TextBlock é um componente que exibe informações de uma consulta médica de forma compacta e organizada.
Mostra nome do médico, nome do pet, nome do dono, data e horário da consulta.
Exibe um ícone de relógio (Alarm) junto à data e hora.
Permite uma imagem personalizada do pet (fotoAnimal) ou usa um ícone padrão (Cat).
Estilizado com bordas arredondadas, layout flexível e separação visual clara entre os dados.

```tsx
import Image from "next/image";
import React from 'react';
import { Cat, Alarm } from '@/assets';

export interface TextBlockProps {
  categoriaConsulta: string;
  nomePet: string;
  nomeDono: string;
  nomeMedico: string;
  data: string;
  horario: string;
  fotoAnimal?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({
  categoriaConsulta,
  nomePet,
  nomeDono,
  nomeMedico,
  data,
  horario,
  fotoAnimal,
}) => {
  return (
    <div className="w-[495px] h-[135px] flex justify-between items-center pt-4 pr-6 pb-4 pl-6 rounded-[16px] bg-[#F0F0F0]">
      <div className="flex flex-col items-center gap-[8px]">
        <div className="w-[51px] h-[90px] flex flex-col items-center gap-[8px] rounded-[4px] pt-[12px] pr-[6px] pb-[12px] pl-[6px] bg-[#FFFFFF]">
          <Image src={Alarm} alt="FotoRelogio" />
          <p className="text-sm font-bold">{data}</p>
          <p className="text-sm font-bold">{horario}</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-sm">
          <span className="font-bold">{nomePet}</span> / {nomeDono}
        </p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-sm">{nomeMedico}</p>
      </div>

      <div className="flex flex-col items-center">
        <Image src={ Cat || fotoAnimal} alt="Foto Gato" className="mb-2" />
        <div className="w-[101px] h-[25px] flex items-center justify-center gap-[8px] rounded-[4px] p-[6px] bg-[#FFFFFF]">
          <p className="text-xs whitespace-nowrap">{categoriaConsulta}</p>
        </div>
      </div>
    </div>
  );
};

export default TextBlock;

```
