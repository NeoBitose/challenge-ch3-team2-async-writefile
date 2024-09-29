// Import
const fsAsync = require("fs").promises;

async function fileUpdateRifqi() {
    //  Path & New Content
    const filePath = "./fileUtama.txt";
    const Content =
        "Update data nich, saya Jetro Sulthan dari Universitas Jember hehehehee";
    // Async write & read
    try {
        await fsAsync.writeFile(filePath, Content);
        const newContent = await fsAsync.readFile(filePath, "utf8");
        return newContent;
    } catch (error) {
        return `Error : ${error.message}`;
    }
}

// Export Function(s)
module.exports = fileUpdateRifqi;  // <= Add other functions here
// module.exports = {fileUpdateBrandon, fileUpdatePerson2, fileUpdatePerson3}