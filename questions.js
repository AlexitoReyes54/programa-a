const prompts = require('prompts');
const animation = require('./animation');

// validation funcion
let yesOrNo = (option) => {
    if (option == "si" || option == "SI") {
        animation()
        return true
    } else if(option == "no" || option == "NO"){
        return true;
    }else{
        return `Escriba SI o NO`;
    }
}

///list of questions 
const questions = [
  {
    type: 'text',
    name: 'username',
    message: 'Desea guardarlo en servicio de almacenamiento al terminar?',
    validate: yesOrNo
  }
];


//quetion execution



module.exports = async () => {
    const response = await prompts(questions);
  
    // => response => { username, age, about }
  };