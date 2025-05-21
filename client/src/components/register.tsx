'use client';

import {useState} from 'react';

export default function Register() {
  const [nomePaciente, setNomePaciente] = useState('');
  const [nomeTutor, setNomeTutor] = useState('');
  const [especiePaciente, setEspeciePaciente] = useState('');
  const [idadePaciente, setIdadePaciente] = useState('');
  const [tipoConsulta, setTipoConsulta] = useState('');
  const [medicoResponsavel, setMedicoResponsavel] = useState('');
  const [dataAtendimento, setDataAtendimento] = useState('');
  const [horarioAtendimento, setHorarioAtendimento] = useState('');
  const [descricaoProblema, setDescricaoProblema] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    console.log('Nome do Paciente', nomePaciente);
    console.log('Nome do Tutor', nomeTutor);
    console.log('Qual é a espécie do paciente?', especiePaciente);
    console.log('Idade do Paciente', idadePaciente);
    console.log('Tipo de consulta', tipoConsulta);
    console.log('Médico Responsável', medicoResponsavel);
    console.log('Data do atendimento', dataAtendimento);
    console.log('Horário do atendimento', horarioAtendimento);
    console.log('Descrição do Problema', descricaoProblema);
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-1xl mx-auto space-y-4 p-6'>
      <div className='flex gap-16'>
        <div className='flex-1'>
          <label className='block mb-1'>Nome do Paciente</label>
          <input
            type='text'
            className='w-full p-2 border rounded'
          />
        </div>

        <div className='flex-1'>
          <label className='block mb-1'>Nome do Tutor</label>
          <input
            type='text'
            className='w-full p-2 border rounded'
          />
        </div>
      </div>


      <div className='flex gap-16'>
        <div className='flex-1'>
          <label className='block mb-60'>Qual é a espécie do paciente?</label>
        </div>
      </div>


    <div className='flex gap-16'>
      <div className='flex-1'>
        <label className='block mb-1'>Idade do Paciente</label>
        <input
        type='number'
        className='w-full p-2 border rounded'
        />
      </div>

      <div className='flex-1'>
        <label className='block mb-1'>Tipo de consulta</label>
        <input
        type='text'
        className='w-full p-2 border rounded'
        />
      </div>
    </div>


    <div className='flex gap-16'>
      <div className='flex-1'>
        <label className='block mb-1'>Médico Responsável</label>
        <input
        type='text'
        className='w-full p-2 border rounded'
        />
      </div>

      <div className='flex-1'>
        <label className='block mb-1'>Data do atendimento</label>
        <input
        type='date'
        className='w-full p-2 border rounded'
        />
      </div>

      <div className='flex-1'>
        <label className='block mb-1'>Horário do atendimento</label>
        <input
        type='time'
        className='w-full p-2 border rounded'
        />
      </div>
    </div>


    <div className='flex gap-16'>
      <div className='flex-1'>
        <label className='block mb-1'>Descrição do Problema</label>
        <input
        type='text'
        className='w-full p-10 border rounded'
        />
      </div>
    </div>


    <button
      type="submit"
      className="w-80 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition float-left">
      Finalizar Cadastro
    </button>

  </form>

  );

}
