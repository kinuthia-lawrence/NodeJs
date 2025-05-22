const logger = require('./logger');  //importing modules.
const os = require('os'); // gives all info about file system.
const fs = require('fs'); //works with file system.
const http = require('http'); //works with a server.

// logger.log(`Hello from larry module.${logger.variableAbc}`)
// console.log(os.cpus())

// console.log(module); the module object
/** check documentation [nodejs.org] to see diffent methods in the different modules - os, path */

//? WOrking with files.
/* fs.writeFile('demo.txt', "The content of the file",(err)=>{
    if(err)
        console.log("Error Occurred")
    else{
        console.log("File Created Successfully")
        fs.readFile("demo.txt","utf8", (err,file)=>{
            if(err){
                console.log("Error occured");
            }else{
                console.log(file);
            }
        })
    }
    // others include, rename, appendFile,unlink,mkdir, writeFile,readdir, readstream,writestream,pipe  
}) */

//? Working with servers
const server = http.createServer((req,res) =>{
    res.write("Welcome to Larrykin343 server!")
    res.end();
})

server.listen("3000");







