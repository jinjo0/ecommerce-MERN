import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Joh Biden',
    email: 'joh@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Donald Trump',
    email: 'trump@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
