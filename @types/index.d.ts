interface User {
  id: string
  name: string;
  cellphoneNumber: string;
  cpf: string;
  email: string;
  address: string;
  password: string;
  role: 'ADMIN' | 'USER'
}
