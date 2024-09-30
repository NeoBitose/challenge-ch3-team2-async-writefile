const fs = require("fs");
const fsAsync = require("fs").promises;

// SYNC
// 1. membaca file surat dari nita dari index.txt
// let loveLetter = fsSync.readFileSync("./index.txt", "utf-8")
// 2. proses print dari surat 
// console.log(loveLetter)

// 3. membuat file baru untuk balasan surat dari Nita
// define variabel untuk balasan
// const loveFeedback = "Terima kasih Nita, aku juga menghargai pesanmu!"
// fsSync.writeFileSync("./balasan_nita.txt", loveFeedback)
// console.log(writeResult)
// membuat folder
// fs.mkdir("NITA_FOLDER", () => {})

// ASYNC
// asynchronous file/write
// fsSync.writeFileSync("./index.txt", "Hallo Salam kenal, aku Nita!!")

// async function bacaSuratDariNita() {
//     try {
//         const bacaSurat = await fs.readFile('./index.txt', "utf-8")
//         console.log(`ini surat dari Nita: ${bacaSurat}`)
//     } catch (error) {
//         console.log(error)
//     }
// }

// bacaSuratDariNita()

// promises
// fs.readFile("./index.txt", "utf-8")
//     .then((isiSurat) => {
//         loveLetter = isiSurat
//         console.log(loveLetter)
//     })
//     .catch((error) => {
//         console.error("Error occurred: ", error)
//     })

// console.log(`ini untuk kamu: ${loveLetter}`)

// Fungsi untuk Nita
async function fileUpdateNita(file, text) {
    console.log(file, text);
    try {
        // menulis text ke file tujuan
        await fsAsync.writeFile(`./assets/${file}`, text, "utf-8");
        // membaca file tujuan setelah update
        const updatedText = await fsAsync.readFile(`./assets/${file}`, "utf-8");
        return updatedText;
    } catch (error) {
        return `Oops, ada error nih: ${error.message}`;
    }
}

module.exports = fileUpdateNita;
