const fs = require("fs")
try {
    const data = fs.readFileSync("sample.txt", "utf8")
    console.log("Contents: ", data)
} catch (err) {
    console.error("Error reading file", err)
}

try {
    fs.writeFileSync("output.txt", "Hello WThis is some sample data (Synchronous Write).orld!")
    console.log("Wrote to file, synchronously")
} catch (err) {
    console.error("Error writing file", err)
}

const os = require('os');

const info = `Hostname: ${os.hostname()}\nPlatform: ${os.platform()}`;

// Write the information to a file
try {
  fs.writeFileSync('system_info.txt', info);
  console.log('System information has been written to system_info.txt');
} catch (err) {
  console.error('Error writing system information:', err);
}