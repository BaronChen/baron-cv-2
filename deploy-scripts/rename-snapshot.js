const fs = require('fs');
const path = require('path');

let buildFolder = path.join(__dirname , '../build/');

if (!fs.existsSync(buildFolder)) {
    console.log("Cnanot find build folder: " + buildFolder);
    process.exit(1);
}

const list = listFiles(buildFolder);

for (let file of list){
    let name = path.basename(file)
    //this should be config file later
    if (!isHtml(name) || name === "index.html" || name === "200.html" || name ==="error.html") {
        continue;
    }

    let nameWithoutSuffix = path.basename(file, ".html");
    let dir = path.dirname(file);

    let newFolder = path.join(dir, nameWithoutSuffix);

    if (!fs.existsSync(newFolder)) {
        fs.mkdirSync(newFolder);
    }

    let newFile = path.join(newFolder,'/index.html');
    console.log(`Move ${file} to ${newFile}`);
    fs.renameSync(file, newFile);
}

console.log("Done.");

function listFiles(dir, filelist) { 
    let files = fs.readdirSync(dir);
    filelist = filelist || [];
    for (let file of files) {
        let fileName = `${dir}${file}`;
        if (fs.statSync(fileName).isDirectory()) {
            filelist = listFiles(`${fileName}/`, filelist);
        }
        else {
            filelist.push(fileName);
        }
    }
    return filelist;
};

function isHtml(fileName) {
    return fileName.endsWith('.html');
}