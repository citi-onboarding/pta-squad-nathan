import { Dialog, Trigger, Content, Close } from "@radix-ui/react-dialog"
import { Button } from "./ui/button"
import Image from "next/image"
import { logoPet, closeButton } from "@/assets"

export function RegisterModal() {

  return (
    <div className="flex justify-end w-[1532px] mx-auto">
      <Dialog>
        <Trigger asChild>
          <Button className="font-sf font-bold w-[205px] h-[48px] bg-[#50E678] hover:bg-[#40C768] text-white rounded-full transition mt-40">
          Finalizar Cadastro
          </Button>
        </Trigger>
        
        {/* Modal de confirmação */}
        <Content className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="w-[408px] h-[423px] bg-white rounded-3xl shadow-lg p-8 relative flex flex-col items-center justify-center">

            <Close asChild>
              <button type="button" className="absolute top-12 right-14 text-black text-2xl font-bold">
                <Image className="w-189 h-74" src={closeButton} alt="closeButton"/>
              </button>
            </Close>

            <Image className="w-189 h-74 mb-1" src={logoPet} alt="logo" />

            <div className="text-center">
              <h2 className="text-base font-sf m-6 scale-100 -mb-0">
                <b>Cadastro finalizado!</b> Envie o comprovante para o <b>tutor</b>
              </h2>
              

              <div className="mb-6 p-3 mt-3">
                <label className="block text-left font-bold mb-2">
                  <b>E-mail</b>
                </label>
                <input type="email" placeholder="Digite aqui..." className="w-full p-3 border border-black rounded-lg"/>
              </div>
              

              <Button className="font-sf w-80 h-11 font-bold bg-[#50E678] hover:bg-[#40C768] text-white rounded-3xl ">
                Enviar
              </Button>
            </div>
          </div>
        </Content>
      </Dialog>
    </div>
  );
  
}
