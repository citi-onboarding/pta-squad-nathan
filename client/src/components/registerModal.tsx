// Realizando as importações necessárias
import { Dialog, Content, Close } from "@radix-ui/react-dialog"
import { Button } from "./ui/button"
import Image from "next/image"
import { logoPet, closeButton } from "@/assets"
import React, { useState } from "react";

// Função RegisterModal que renderiza o modal de cadastro
export function RegisterModal({
  open,
  onOpenChange,
  dadosFormulario
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  dadosFormulario: any
}) {

  const [email, setEmail] = useState("");
  
  const handleSendEmail = async () => {
    try {
      await fetch("http://localhost:3001/api/e-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: dadosFormulario.tutorName,
          patientName: dadosFormulario.name,
          userEmail: email,
          subjectText: "Confirmação de agendamento de consulta veterinária.",
        }),
      });
  
      // Fecha o modal após envio
      onOpenChange(false);
      setEmail("");
    } catch (error) {
    }
  };
  
  return (
    // O modal é exibido quando o botão é clicado
    <Dialog open={open} onOpenChange={onOpenChange}>
      
      {/* Conteúdo do modal */}
      {/* O modal é exibido em uma tela cheia com um fundo escuro devido ao "bg-opacity-60" */}
      <Content className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-2">
        <div className="w-full max-w-96 bg-white rounded-3xl shadow-lg p-6 sm:p-8 relative flex flex-col items-center justify-center">

          {/* Botão de fechar o modal */}
          <Close asChild>
            <button type="button" className="absolute top-4 right-4 sm:top-9 sm:right-10 text-black text-2xl font-bold">
              <Image src={closeButton} alt="closeButton"/>
            </button>
          </Close>

          {/* Logo do aplicativo */}
          <Image src={logoPet} alt="logo" />

          {/* Texto do modal */}
          <div className="text-center">
            <h2 className="text-base font-sf m-6 scale-100 -mb-0">
              <b>Cadastro finalizado!</b> Envie o comprovante para o <b>tutor</b>
            </h2>
            
            {/* Campo do formulário */}
            <div className="mb-6 p-3 mt-3">
              <label className="block sm:text-left font-bold mb-1">
                E-mail
              </label>
              <input
                type="email"
                placeholder="Digite aqui..."
                className="w-full p-3 border border-black rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            
            {/* Botão de enviar */}
            <Button
              onClick={handleSendEmail}
              className="w-auto h-auto font-sf sm:w-80 sm:h-11 font-bold bg-[#50E678] hover:bg-[#40C768] text-white rounded-3xl ">
              Enviar
            </Button>
          </div>

        </div>
      </Content>

    </Dialog>
  );
  
}
