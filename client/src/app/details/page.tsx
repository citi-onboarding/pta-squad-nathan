'use client'
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Image from "next/image"
import { arrow } from "@/assets"
import { cat6 } from "@/assets"
import { ok } from "@/assets"
import ConsultCard from "@/components/ConsultCard"
import ConsultaModal from "@/components/Consultamodal"
import { useState } from "react"

export default function details() {
  const[openmodal, setOpenModal] = useState(false)
  
  return (
    <>
      <Header />
      <ConsultaModal isOpen={openmodal} setModalOpen={() => setOpenModal (!openmodal)}/>
      <div className="flex flex-row h-full w-full justify-around  bg-[#FFFFFF] text-black mt-14">

        {/* COMEÇO LADO ESQUERDO */}
        <div className="flex-1 flex flex-col ml-[200px]"> 

          {/* detalhes da consulta */}
          <div className="flex flex-row items-baseline w-[576px] h-[53px] mr-[50px]">
            <Image className="w-[32px] h-[32px] mr-4" src={arrow} alt="arrow" />

            <h1 className=" -mt-4  text-4xl font-bold text-[48px] ">Detalhes da consulta</h1>
          </div>

          {/* paciente */}
          <div className="flex mt-[20px]">
            <h2 className="font-bold text-[24px]">Paciente</h2>
          </div>

          {/* foto do gato + componentes */}
          <div className="flex flex-row mt-[30px] items-center ">
            <Image className="w-[295px] h-[299px]" src={cat6} alt="gato" />
            <div className="flex ml-10 flex-col -mt-[145px] ">
              <h2 className="font-bold">Luna</h2>
              <h2>5 anos</h2>
            </div>
            <div className="flex flex-col -ml-11 mt-[250px]">
              <h2> Lucas Gomes</h2>
              <h2>Dr. José Carlos</h2>
            </div>

          </div>
          {/* descrição */}
          <div className="flex mt-[70px] flex-col w-[510px] h-[102px]">
            <h2 className="font-bold text-[16px]">Descrição do problema:</h2>

            <p className="mt-2 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dolore sunt accusamus, similique beatae inventore distinctio fuga ipsum cum eos, laboriosam consequatur recusandae consequuntur obcaecati asperiores illum dicta quibusdam velit!</p>

          </div>

          {/* Tipo de consulta */}
          <div className=" flex flex-row w-[349px] h-[30px] mt-[50px]">
            <h2 className="font-bold text-[16px] ">Tipo de consulta:</h2>
            <div className="w-[101px] h-[30px] bg-[#AAE1FF] ml-[30px] rounded">
              <p className="text-center items-center mt-0.5">Vacinação</p>
            </div>
          </div>

          {/* Deseja realaizar consulta */}
          <div className="w-[624px] h-[138px] border-[1px] border-grey-200 rounded-[24px] mt-[43px] p-[24px] ">

            <div className="flex flex-col items-center justify-center gap-y-[20px]">
              <h2 className="font-bold ">Deseja realizar outra consulta?</h2>
              <div className="flex flex-row gap-x-[1px]">

                <Button onClick={() => setOpenModal(true)} className="w-[576px] h-[48px]  pt-[12px] pb-[12px] bg-[#50E678] border-[1px] rounded-[50px]">
                  <Image className="w-[24px] h-[24px]" src={ok} alt="ok" />
                  Agendamento</Button>
              </div>
            </div>
          </div>


        </div>

        {/* Fim lado esquerdo */}

        {/* COMEÇO LADO DIREITO */}

        <div className="flex flex-col mr-[250px] mt-[78px] w-[558px] h-[700px] ">
          {/* Histórico de consultas */}

          <h2 className="font-bold text-[24px] mg-[300px]">Histórico de consultas</h2>
          {/* div de consultas */}

          <div className="w-[558px] h-[448px] border-[1px] border-grey-200 rounded-[24px] mt-[30px] p-[24px]  justify-center flex flex-col items-center gap-y-[22px]">

            {/* Carde de consulta */}

            <ConsultCard date="18/02" time="13:00" title="Primeira consulta" doctor="Dr. José Carlos" />
            <ConsultCard date="20/03" time="13:00" title="Primeira consulta" doctor="Dr. José Carlos" />
            <ConsultCard date="15/04" time="14:00" title="Primeira consulta" doctor="Dr. José Carlos" />
            <ConsultCard date="20/03" time="13:00" title="Primeira consulta" doctor="Dr. José Carlos" />




          </div>



        </div>

      </div>

    </>


  )
}
