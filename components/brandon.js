// Imports
const fsAsync = require("fs").promises;

// Brandon's Async Write & Read Function
async function fileUpdateBrandon (Name, Class) {
    // Path & content declarations
    const filePath = "./fileUtama.txt";
    const content = `Name\t: ${Name}\nClass\t: ${Class}`;
    // Async write and read file
    try {
        await fsAsync.writeFile(filePath, content, "utf8");
        readContent = fsAsync.readFile(filePath, "utf8");
        return readContent;
    }
    catch (error) {
        return `There seems to be an error: ${error.message}`;
    }
}

// Export Function(s)
module.exports = fileUpdateBrandon;  // <= Add other functions here
// module.exports = {fileUpdateBrandon, fileUpdatePerson2, fileUpdatePerson3}