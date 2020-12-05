const fs = require("fs");

console.time("tiempo de respuesta")

const streamLectura = fs.createReadStream( "./archivos/mi_archivo.txt" , {encoding:'utf8'} );


streamLectura.on("open" , ()=>{
    console.log("abriendo archivo")
}).on("data" , ()=>{
    // console.log("----")
}).on('close', ()=>{
    console.log("archivo cerrado") 
}).on('error' , ()=>{
     console.log("error en el archivo")
})
 
console.timeEnd("tiempo de respuesta")