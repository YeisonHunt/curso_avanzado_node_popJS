 
const fs = require('fs');


console.time("tiempo de respuesta");


// for(let i=0; i<= 10; i++) {
//   fs.readFileSync('archivo.txt', 'utf8');
// }

let streamEscritura;

for(let i=0; i<= 10; i++) {
   
   streamEscritura = fs.createReadStream("archivo.txt", {
    encoding: "utf-8"
  });

}




console.timeEnd("tiempo de respuesta");