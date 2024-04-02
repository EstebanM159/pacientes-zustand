import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { type DraftPatient, type Patient } from './types'
import { v4 as uuidV4 } from 'uuid'
type PatientState = {
  patients: Patient[]
  activeId: Patient['id']
  addPatient: (data: DraftPatient) => void
  deletePatient: (id: Patient['id']) => void
  setActiveId: (id: Patient['id']) => void
  updatePatient: (data: DraftPatient) => void
}
const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidV4() }
}
export const usePatientStore = create<PatientState>()(
  devtools((set, get) => ({
    patients: [],
    activeId: '',
    addPatient: (data) => {
      const newPatient = createPatient(data)
      set((state) => ({
        patients: [...state.patients, newPatient]
      }))
    },
    deletePatient (id) {
      set((state) => ({
        patients: state.patients.filter(patient => patient.id !== id)
      }))
    },
    setActiveId (id) {
      set((state) => ({
        patients: state.patients,
        activeId: id
      }))
    },
    updatePatient (data) {
      set((state) => ({
        patients: state.patients.map(patient => patient.id === state.activeId ? { id: state.activeId, ...data } : patient),
        activeId: ''
      }))
    }
  })
  ))
