// Imports
const http = require("http");
const url = require("url");
const fs = require("fs");
const fsAsync = require("fs").promises;
// Import individual functions from component brandon
const fileUpdateBrandon = require('./components/brandon.js');
const fileUpdateAlif = require('./components/alif.js');
const fileUpdaterifqi = require('./components/rifqi.js');

// Fungsi buat nulis dan baca file
async function handleFileOperation() {
  const filePath = "./fileUtama.txt";
  const newContent = "Ini adalah konten baru dari Rafly Aziz Abdillah, kelas FSW 2";
  try {
    // Tulis (timpa) file dengan konten baru
    await fsAsync.writeFile(filePath, newContent, "utf8");
    // Baca lagi file setelah di-update
    const updatedContent = await fsAsync.readFile(filePath, "utf8");
    return updatedContent;
  } catch (error) {
    return `Oops, ada error nih: ${error.message}`;
  }
}

// HTTP Server initializations
const server = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url, true);

  // Rafly's web route
  if (reqUrl.pathname === "/rafly" && req.method === "GET") {
    try {
      // Panggil fungsi buat handle nulis & baca file
      const result = await handleFileOperation();
      // Kirim hasilnya balik ke browser
      res.end(`Berhasil di-update: \n${result}`);
    } catch (error) {
      res.end(`Error di server: ${error.message}`);
    }
  }

  // Alif's web route
  else if(reqUrl.pathname === "/alif" && req.method === "GET"){
    nameFile = "fileUtama.txt";
    textContent = "Perkenalkan Saya Ahmad Alif Ramadhan, dari Team 2 kelas FSW 2";
    try {
      // Panggil fungsi buat handle nulis & baca file      
      const result = await fileUpdateAlif(nameFile, textContent);
      // memberikan respon pada browser
      res.end(`Update baru dari Alif: \n${result}`);
    } catch (error) {
      res.end(`Error di server: ${error.message}`);
    }
  }
    
  // Brandon's web route
  else if(reqUrl.pathname === "/brandon" && req.method === "GET"){
    // Page content declaration
    Name = "Gede Brandon Abelio Ogaden";
    Class = "FSW-2"
    try {
      // Call write and read function
      const result = await fileUpdateBrandon(Name, Class);
      // Pass the result to the website
      res.end(`${result}`);
    }catch (error) {
      // Error handling
      res.end(`There seems to be an error: ${error.message}`)
    }
  } 
  
  
  else if (reqUrl.pathname === "/rifqi" && req.method === "GET"){
    try {
      // Call write & read function
      const newContent = await fileUpdaterifqi();
      // Output Website
      res.end(newContent);
  } catch (error) {
      console.log(error);
      //  Error Handling
      res.end(`Terjadi kesalahan: ${error.message}`);
  }
  }
    
  else {
    // If routes is not found
    res.end("Page not Found");
  }
});

// Run the server on localhost port 3000
server.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
