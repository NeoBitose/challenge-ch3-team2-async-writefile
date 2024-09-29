// import fsAsync from "fs/promises";
const fsAsync = require("fs").promises;

// Wahyu Async Write & Read Function
async function fileUpdateWahyu(fileUtama, text) {
  console.log(
    `ini adalah file dari wahyu: ${fileUtama}, ini adalah text dari wahyu: ${text}`
  );
  try {
    // kita tulis text kedalam file tujuan kita (file utama)
    await fsAsync.writeFile(fileUtama, text, "utf-8");

    // setelah itu dia akan membaca isi dari file tujuan kita setelah di update
    const updateText = await fsAsync.readFile(`./${fileUtama}`, "utf-8");
    return updateText;
  } catch (error) {
    return `Oops, ada error nih: ${error.message}`;
  }
}

// Export Function(s)
module.exports = fileUpdateWahyu; // <= Add other functions here
// module.exports = {fileUpdatewahyu, fileUpdatePerson2, fileUpdatePerson3}
