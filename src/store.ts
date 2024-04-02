import { create } from 'zustand'
import { type DraftPatient, type Patient } from './types'
import { v4 as uuidV4 } from 'uuid'
type PatientState = {
  patients: Patient[]
  addPatient: (data: DraftPatient) => void
}
const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidV4() }
}
export const usePatientStore = create<PatientState>((set, get) => ({
  patients: [],
  addPatient: (data) => {
    const newPatient = createPatient(data)
    set((state) => ({
      patients: [...state.patients, newPatient]
    }))
  }
}))
