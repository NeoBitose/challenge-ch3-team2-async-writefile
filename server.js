const http = require("http");
const url = require("url");
const fs = require("fs");
const fsAsync = require("fs").promises;

// Fungsi buat nulis dan baca file
async function handleFileOperation() {
  const filePath = "./fileUtama.txt";
  const newContent =
    "Ini adalah konten baru dari Rafly Aziz Abdillah, kelas FSW 2";

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
  } else {
    // Kalau path-nya nggak ketemu
    res.end("Halaman nggak ada, nih.");
  }
});

// Jalanin server di port 3000
server.listen(3000, () => {
  console.log("Server nyala di http://localhost:3000");
});
