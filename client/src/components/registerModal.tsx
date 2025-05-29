// Realizando as importações necessárias
import { Dialog, Trigger, Content, Close } from "@radix-ui/react-dialog"
import { Button } from "./ui/button"
import Image from "next/image"
import { logoPet, closeButton } from "@/assets"

// Função RegisterModal que renderiza o modal de cadastro
export function RegisterModal() {

  return (
    // Define as dimensões do modal e o espaçamento entre os elementos
    <div className="flex justify-center sm:justify-end max-w-screen-2xl mx-auto">
      {/* O modal é exibido quando o botão é clicado */}
      <Dialog>

        <Trigger asChild>
          <Button className="w-auto h-auto font-sf font-bold sm:w-52 sm:h-12 bg-[#50E678] hover:bg-[#40C768] text-white rounded-full transition mt-12">
          Finalizar Cadastro
          </Button>
        </Trigger>
        
        {/* Conteúdo do modal */}
        {/* O modal é exibido em uma tela cheia com um fundo escuro devido ao "bg-opacity-60" */}
        <Content className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
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
                <input type="email" placeholder="Digite aqui..." className="w-full p-3 border border-black rounded-lg"/>
              </div>
              
              {/* Botão de enviar */}
              <Button className="w-auto h-auto font-sf sm:w-80 sm:h-11 font-bold bg-[#50E678] hover:bg-[#40C768] text-white rounded-3xl ">
                Enviar
              </Button>
            </div>

          </div>
        </Content>

      </Dialog>
    </div>
  );
  
}
