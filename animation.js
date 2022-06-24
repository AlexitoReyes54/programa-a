
const cliSpinners = require('cli-spinners');
var colors = require('colors');
const logUpdate = require('log-update');

function animation() {
    const spinner = cliSpinners[process.argv[2] || 'bouncingBar'];
    let i = 0;
    let magic = setInterval(() => {
        const {frames} = spinner;
        logUpdate(frames[i = ++i % frames.length] + ' Cargando informacion'.bgBlue);
    }, spinner.interval);    
    setTimeout(() =>{
        clearInterval(magic);
        console.log("Listo".bgBrightCyan);
    },2000)
}

module.exports = animation