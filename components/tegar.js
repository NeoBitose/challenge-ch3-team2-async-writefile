const fsAsync = require("fs").promises;


// async of read and write functions
async function fileUpdateTegar(filePath, textContent) {
    // test console output before rewrite
    console.log(`FROM ${filePath} before being rewritten. CONTENT: ${textContent}`);

    try{
        // rewrite file
        await fsAsync.writeFile(filePath, textContent)
        // console if rewrite has done
        console.log("success rewrite file")

        // read the file 
        let resultRewrite = await fsAsync.readFile(filePath, "utf-8");
        console.log(resultRewrite)

        // send result to web
        return resultRewrite;
    }
    catch(error){
        console.log(error)
    }
}

// for export functions to server
module.exports = fileUpdateTegar;