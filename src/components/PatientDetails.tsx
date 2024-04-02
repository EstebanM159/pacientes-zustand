import { type Patient } from '../types'
import PatientsDetailItem from './PatientsDetailItem'
type PatientDetailsProps = {
  patient: Patient
}
export default function PatientDetails ({ patient }: PatientDetailsProps) {
  return (
    <div className='bg-white mx-5 px-5 my-10 py-10 shadow-md rounded-xl'>
        <PatientsDetailItem label='ID' data={patient.id}/>
        <PatientsDetailItem label='Nombre' data={patient.name}/>
        <PatientsDetailItem label='Propietario' data={patient.caretaker}/>
        <PatientsDetailItem label='Email' data={patient.email}/>
        <PatientsDetailItem label='Fecha' data={patient.date.toString()}/>
        <PatientsDetailItem label='Sintomas' data={patient.symptoms}/>
    </div>
  )
}
