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

module.exports = { handleFileOperation };
