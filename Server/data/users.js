import bcrypt from 'bcryptjs';

const users = [
    {
        name:"Admin",
        email:"admin@musicpro.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name:"User",
        email:"sne.larenasortega@hotmail.com",
        password: bcrypt.hashSync("123456", 10),
    },
  ];
  
  export default users;