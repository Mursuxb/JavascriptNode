const fs = require("fs")
/* let sample = fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading fööl", err)
    } else {
        console.log("Contents: ", data)
    }
});
fs.writeFile('output.txt', 'Hello World!', (err) => {
    if (err) {
        console.error("Error writing file", err)
    } else {
        console.log("Wrote to file")
    }
}); */


const os = require("os")
/* console.log("Hostname: ", os.hostname())
console.log("Platform: ", os.platform())
console.log("CPUs: ", os.cpus()) */

fs.writeFile("OS-info.txt", `Hostname: ${os.hostname()}\nPlatform: ${os.platform()}\nCPUs: ${os.cpus().length}`, (err) => {
    if (err) {
        console.error("Error writing file", err)
    } else {
        console.log("Wrote to file")
    }
});