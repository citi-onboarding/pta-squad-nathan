'use client'
import { Button } from "@/components/ui/button"

export default function detalhes() {
  return (
    
    <div className="flex flex-1 flex-col h-full justify-around items-center bg-black">
      <h1 className="text-white text-4xl font-bold">Detalhes</h1>
      <p className="text-white text-xl">
        Detalhes do projeto
      </p>
      <Button>botão</Button>
    </div>

   
  )
}
