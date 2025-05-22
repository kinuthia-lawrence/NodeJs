const logger = require("./logger"); //importing modules.
const os = require("os"); // gives all info about file system.
const fs = require("fs"); //works with file system.
const http = require("http"); //works with a server.
const express = require("express"); // web framework for nodejs
const path = require("path");
const app = express(); //creating an instance of express

// logger.log(`Hello from larry module.${logger.variableAbc}`)
//? getting os details -- os module.
// console.log(os.cpus())
// console.log(module); the module object
/** check documentation [nodejs.org] to see diffent methods in the different modules - os, path */

//? Working with files -- fs module
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

//? Working with servers -- http module
/* const server = http.createServer((req, res) => {
  if (req.url === "/") {
      const readStream = fs.createReadStream("index.html");
    res.writeHead(200, { "content-type": "text/html" });
    readStream.pipe(res);
  } else if (req.url === "/about") {
    res.write("This is the about page!");
    res.end();
  } else {
    res.write("COMING SOON!");
    res.end();
  }
  
});
server.listen("3000"); */

//?package.json
// Package.json stores metadata of the program and dependencies.
/* npm init --create teh package.json You can use --yes to skip
you can search for packages in npmjs.com
npm install <package_name> --save
npm uninstall <package_name> --save

Semantic Versioning
1. Major version when you make incompatible API changes
2. Minor version when you add functionality in a backwards compatible manner
3. Patch version when you make backwards compatible bug fixes
example: 1.0.0,
^ means that it will update the minor version and patch version
~ means that it will update the patch version
example: ^1.x.x,  ~1.0.x
*/

//? ExpressJs -- express module
// ExpressJs - A minimalist web framework for Node.js( provides an easy and intuitive way to create web applications and APIs.)
/* access it at -expressjs.com
npm install express --save --to install express js

*/
app.get("/", (req, res) => {
  res.send("Hello from Larrykin343");
});
app.get("/person/:name/:age", (req, res) => {
  const name = req.params.name;
  const age = req.params.age;
  //   res.send(`Hello ${name} your age is ${age}`);
  res.send(req.params);
  // request parameters are used to get the data from the url.(required)
  //query parameters are used to get the data from the url.(optional)
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  // __dirname is a global variable that gives the current directory of the file.
});

// app.listen("5000");
// set PORT = 3000 //setting the port in the env. through the terminal.
const port = process.env.PORT || "5000";
app.listen(port, () => console.log(`Listening to Port : ${port}`));

//Nodemon
/* 
npm install -g nodemon

*/
