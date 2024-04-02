import { usePatientStore } from '../store'
import { toast } from 'react-toastify'
import { type Patient } from '../types'
import PatientsDetailItem from './PatientsDetailItem'
type PatientDetailsProps = {
  patient: Patient
}

export default function PatientDetails ({ patient }: PatientDetailsProps) {
  const { deletePatient, setActiveId } = usePatientStore()
  const handleClick = () => {
    deletePatient(patient.id)
    toast.error('Paciente eliminado')
  }

  return (
    <div className='bg-white mx-5 px-5 my-10 py-10 shadow-md rounded-xl'>
        <PatientsDetailItem label='ID' data={patient.id}/>
        <PatientsDetailItem label='Nombre' data={patient.name}/>
        <PatientsDetailItem label='Propietario' data={patient.caretaker}/>
        <PatientsDetailItem label='Email' data={patient.email}/>
        <PatientsDetailItem label='Fecha' data={patient.date.toString()}/>
        <PatientsDetailItem label='Sintomas' data={patient.symptoms}/>
        <div className="flex flex-col md:flex-row justify-between gap-3 mt-10">
            <button
                type='button'
                className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                onClick={() => { setActiveId(patient.id) }}
            >Editar
            </button>
            <button
                type='button'
                className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                onClick={handleClick}
            >Borrar
            </button>
        </div>
    </div>
  )
}
