const http = require("http");
const path = require("path");
const fs = require("fs");
const fsAsync = require("fs").promises;

async function writeNewFile() {
    const filePath = path.join(__dirname, "../assets/file-rifqi.txt");
    const writeNewContent =
        "File berhasil di rewrite, berikut biodata saya :\n\nNama : Muhammad Rifqi Tri Afandi\nKelas  : FSW 2\nUniv   : Universitas Jember";

    try {
        await fsAsync.writeFile(filePath, writeNewContent);
        const newContent = await fsAsync.readFile(filePath, "utf8");
        return newContent;
    } catch (error) {
        return `Error : ${error.message}`;
    }
}

const server = http.createServer(async (req, res) => {
    console.log(req.url);
    const pathUrl = req.url;

    if (pathUrl === "/rifqi") {
        const mainContentPath = path.join(__dirname, "../mainIndex.txt");

        try {
            const newContent = await writeNewFile();

            await fsAsync.writeFile(mainContentPath, newContent);
            console.log("sukses nulis ulang file mainIndex.txt");

            const resultRewrite = await fsAsync.readFile(mainContentPath, "utf-8");
            console.log(resultRewrite);

            res.end(resultRewrite);
        } catch (error) {
            console.log(error);
            res.end(`Terjadi kesalahan: ${error.message}`);
        }
    } else {
        res.statusCode = 404;
        res.end("INI GAK ADA! Status code: 404");
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Aplikasi jalan di port 3000');
});
