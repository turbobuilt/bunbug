


let files = ["second"]
for(let fileName of files) {
    let file = require(__dirname + "/" + fileName);
    file()
}