export interface Parent {
  id: number
  firstName: string
  lastName: string
  email: string
  rut: string
  phone: string
  children: Child[]
  createdAt: string
}
interface Child {
  name: string
  gender: string
  age: number
}
