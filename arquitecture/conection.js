const { Sequelize,DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});


const sequelizeApap = new Sequelize({
  dialect: 'sqlite',
  storage: 'databaseApap.sqlite'
});


async function test(){
    try {
      
      await sequelize.authenticate();
      await sequelizeApap.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
    }
  

    const Nomina = sequelize.define('Nomina', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
     /* tipo_de_registro: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rnc: {
        type: DataTypes.STRING
      },
      cuenta_saliente: { 
          type: DataTypes.STRING
      },
      total_fondos: {
          type: DataTypes.STRING
      },
      fecha_pago: {
          type: DataTypes.STRING
      },*/
  
      //DETALLE 
  
      clave_de_nomina: {
          type: DataTypes.STRING
      },
      correo_electronico: {
          type: DataTypes.STRING
      },
      numero_de_cuenta: {
          type: DataTypes.STRING
      },
      salario_bruto: {
          type: DataTypes.STRING
      },
      salario_neto: {
          type: DataTypes.STRING
      },
      pago_extra: {
          type: DataTypes.STRING
      },
  
      //SUMARIO
  
    
    }, {
      // Other model options go here
    });
 //   Nomina.sync({ alter: true })
 const NominaApap = sequelizeApap.define('Nomina', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  clave_de_nomina: {
      type: DataTypes.STRING
  },
  correo_electronico: {
      type: DataTypes.STRING
  },
  numero_de_cuenta: {
      type: DataTypes.STRING
  },
  salario_bruto: {
      type: DataTypes.STRING
  },
  salario_neto: {
      type: DataTypes.STRING
  },
  pago_extra: {
      type: DataTypes.STRING
  },

}, {
});






    async function create() {
      try {
        
        const nomina = await Nomina.create({
          /*id: "1",
          tipo_de_registro:  "tipo_de_registro",
          rnc:  "rnc",
          cuenta_saliente: "1",
          total_fondos:  "1",
          fecha_pago:  "1",*/
  
          clave_de_nomina:  "12",
        correo_electronico: "correo",
        numero_de_cuenta: "213123", 
        salario_bruto:  "12000",
        salario_neto:  "1200",
        pago_extra:  "0000"
        });    
        console.log(nomina.id);      
      } catch (error) {
          console.log(error);
      }
    
  }
  

  async function getAllData() {
    
    let nomina = await Nomina.findAll();
    
    let array = nomina.map((val) => val.dataValues)  
    return array;
  }
  
  
  //console.log("data=",getAllData());
 
  

async function writeApapDb(dataObj) {
  try {
    const nomina = await NominaApap.create(dataObj);    
    console.log(nomina.id);      
  } catch (error) {
      console.log(error);
  }
}
module.exports = {test, sequelize,create,getAllData,writeApapDb}