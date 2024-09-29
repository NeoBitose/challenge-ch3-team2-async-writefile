// Imports
const http = require("http");
const url = require("url");
const fs = require("fs");
const fsAsync = require("fs").promises;

// Import individual functions from each component
const fileUpdateRafly = require("./components/rafly.js");
const fileUpdateBrandon = require("./components/brandon.js");
const fileUpdateAlif = require("./components/alif.js");
const fileUpdaterifqi = require("./components/rifqi.js");
const fileUpdateTegar = require("./components/tegar.js");
const fileUpdateWahyu = require("./components/wahyu.js");

// Fungsi untuk Nita
async function fileUpdateNita(file, text) {
  console.log(file, text);
  try {
    // menulis text ke file tujuan
    await fsAsync.writeFile(file, text, "utf-8");
    // membaca file tujuan setelah update
    const updatedText = await fsAsync.readFile(`./${file}`, "utf-8");
    return updatedText;
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
      // Panggil fungsi handleFileOperation dari rafly.js
      const result = await fileUpdateRafly.handleFileOperation();
      // Kirim hasilnya balik ke browser
      res.end(`Berhasil di-update oleh Rafly: \n${result}`);
    } catch (error) {
      res.end(`Error di server: ${error.message}`);
    }
  }

  // Alif's web route
  else if (reqUrl.pathname === "/alif" && req.method === "GET") {
    nameFile = "fileUtama.txt";
    textContent =
      "Perkenalkan Saya Ahmad Alif Ramadhan, dari Team 2 kelas FSW 2";
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
  else if (reqUrl.pathname === "/brandon" && req.method === "GET") {
    // Page content declaration
    Name = "Gede Brandon Abelio Ogaden";
    Class = "FSW-2";
    try {
      // Call write and read function
      const result = await fileUpdateBrandon(Name, Class);
      // Pass the result to the website
      res.end(`${result}`);
    } catch (error) {
      // Error handling
      res.end(`There seems to be an error: ${error.message}`);
    }

  }

  // Nita's web route
  else if (reqUrl.pathname === "/nita" && req.method === "GET") {
    const nameFile = "fileUtama.txt";
    const textContent =
      "Perkenalkan, saya Nita Fitrotul Mar'ah dari kelas FSW 2.";
    try {
      // Panggil fungsi buat handle nulis & baca file
      const result = await fileUpdateNita(nameFile, textContent);
      // memberikan respon pada browser
      res.end(`Update dari Nita: \n${result}`);
    } catch (error) {
      res.end(`Error di server: ${error.message}`);
    }
  } else if (reqUrl.pathname === "/rifqi" && req.method === "GET") {
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

  // tegar's web route
  else if (reqUrl.pathname === "/tegar" && req.method === "GET") {
    // set file path
    filePath = "fileUtama.txt";
    // set content for file
    newContent = `hello, my name is Tegar from FSW-2. this is a random integer = ${Math.floor(
      Math.random() * 101
    )}`;

    // call the function from tegar.js
    try {
      const resultRewrite = await fileUpdateTegar(filePath, newContent);
      res.end(`${resultRewrite}`);
    } catch (error) {
      // error handling for file writing
      res.end(`There seems to be an error: ${error.message}`);
    }
  }

  // wahyu web route
  else if (reqUrl.pathname === "/wahyu" && req.method === "GET") {
    // set file path
    nameFile = "fileUtama.txt";
    // set content for file
    content =
      "Hallo gengs, perkenalkan nama saya wahyu anang zulfikri dari team 2 kelas FSW2";

    try {
      // call the function from wahyu.js
      const result = await fileUpdateWahyu(nameFile, content);
      res.end(
        `Sudah berhasil menampilkan update terbaru dari Wahyu : \n${result}`
      );
    } catch (error) {
      res.end(`Error di server: ${error.message}`);
    }
  } else {
    // If routes is not found
    res.end("Page not Found");
  }
});

// Run the server on localhost port 3000
server.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
