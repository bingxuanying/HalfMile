require('module-alias/register');
const { createUser, getUser, rmUser } = require('@app/service/dynamodb');

const { email, password } = { 
  email: 'debug@gmail.com', 
  password: 'password'
};

createUser(email, password).then(user => console.log(user)).catch(err => console.log(err))