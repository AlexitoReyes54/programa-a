const questions = require('./questions')
//const {Nomina, create} = require('./arquitecture/nomina')
const { log } = require('console');
const {test, create, getAllData,writeApapDb} = require('./arquitecture/conection')
var fs = require('fs');
//run the questions 
//questions() create
test()



  function apap() {
    fs.readFile('nomina.txt', 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return
      }
  
      let info = data.split("\n")
  
      for (let i = 1; i < info.length -1; i++) {
          let temp = info[i].split(',');
          //console.log(temp);    
          let obj = {
              clave_de_nomina:  temp[0],
          correo_electronico: temp[1],
          numero_de_cuenta: temp[2], 
          salario_bruto:  temp[3],
          salario_neto:  temp[4],
          pago_extra:  temp[5]
          }
          //console.log();
          writeApapDb(obj)
      }
  
    })
  }

  module.exports = {apap}