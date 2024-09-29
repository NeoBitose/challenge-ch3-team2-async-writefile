const http = require("http");
const url = require("url");
const fs = require("fs");
const fsAsync = require("fs").promises;

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

async function fileUpdateAlif(file, text) {
  console.log(file, text)
  try {
    // menulis text kedalam file tujuan
    await fsAsync.writeFile(file, text, "utf-8")
    // membaca file tujuan tsetelah update
    const updateText = await fsAsync.readFile(`./${file}`, "utf-8")
    return updateText;
  } 
  catch (error) {
    return `Oops, ada error nih: ${error.message}`;
  }
}

// Bikin server HTTP
const server = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url, true);
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
  else {
    // Kalau path-nya nggak ketemu
    res.end("Halaman nggak ada, nih.");
  }
});

// Jalanin server di port 3000
server.listen(3000, () => {
  console.log("Server nyala di http://localhost:3000");
});
