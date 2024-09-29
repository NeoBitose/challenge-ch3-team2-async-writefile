// Imports
const fsAsync = require("fs").promises;

// Alif Async Write & Read Function
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

// Export Function(s)
module.exports = fileUpdateAlif;  // <= Add other functions here
// module.exports = {fileUpdateBrandon, fileUpdatePerson2, fileUpdatePerson3}