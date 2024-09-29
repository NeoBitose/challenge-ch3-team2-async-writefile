// Import
const fsAsync = require("fs").promises;

async function fileUpdateRifqi() {
    //  Path & New Content
    const filePath = "./fileUtama.txt";
    const writeNewContent =
        "File berhasil di rewrite, berikut biodata saya :\n\nNama : Muhammad Rifqi Tri Afandi\nKelas  : FSW 2\nUniv   : Universitas Jember";
    // Async write & read
    try {
        await fsAsync.writeFile(filePath, writeNewContent);
        const newContent = await fsAsync.readFile(filePath, "utf8");
        return newContent;
    } catch (error) {
        return `Error : ${error.message}`;
    }
}

// Export Function(s)
module.exports = fileUpdateRifqi;  // <= Add other functions here
// module.exports = {fileUpdateBrandon, fileUpdatePerson2, fileUpdatePerson3}