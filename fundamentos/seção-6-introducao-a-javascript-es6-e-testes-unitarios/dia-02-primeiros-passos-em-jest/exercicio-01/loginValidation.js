// loginValidation.js
const greetingMessage = (user) => {
  return `Hello, ${user}! Que bom ter você de volta`;
};
const loginErrorMessage = (user) => {
  return `Pessoa usuária ${user} não encontrada, tente novamente!`;
};

const verifyCredentials = (userInfo) => {
  const userName = userInfo.userName;
  const password = userInfo.password;
  if (password === 123456 && userName === 'Joana') {
    return greetingMessage(userName);
  } else {
    return loginErrorMessage(userName);
  }
};
module.exports = { greetingMessage, loginErrorMessage, verifyCredentials };