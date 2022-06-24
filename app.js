const questions = require('./questions')
//const {Nomina, create} = require('./arquitecture/nomina')
const { log } = require('console');
const {test, create, getAllData} = require('./arquitecture/conection')
var fs = require('fs');
//run the questions 
//questions() create

test()
//create()
 
// read data from db 
async function laodData() {
    let data = "E,100210,330123320,12000,12/12/12\n"
    let nomina = await getAllData();

    nomina.map((val) =>{
        data += val.clave_de_nomina + "," + val.correo_electronico + "," + val.numero_de_cuenta + "," + val.salario_bruto + "," + val.salario_neto + "," + val.pago_extra + "\n"
      })

    data += "S00" + nomina.length

    fs.writeFile('nomina.txt', data, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

}
module.exports = {laodData}