// import { strict as assert } from "assert";

// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, "3"]], 4, 5]);

// dns

// "type": "module"  => "type":"commonjs" 변경

// const dns = require("dns");

// dns.lookup("example.org", (err, address, family) => {
//     console.log("address:%j family:IPv%s", address, family);
// });

// dns.resolve4("archive.org", (err, addresses) => {
//     if (err) throw err;

//     console.log(`addresses:${JSON.stringify(addresses)}`);

//     addresses.forEach((a) => {
//         dns.reverse(a, (err, hostnames) => {
//             if (err) {
//                 throw err;
//             }
//             console.log(`reverse for ${a} : ${JSON.stringify(hostnames)}`);
//         });
//     });
// });

// try {
//     const m = 1;
//     const n = m + 2;
// } catch (err) {
//     //error handle
// }

// const fs = require("fs");
// fs.readFile("a file that does not exist", (err, data) => {
//     if (err) {
//         console.log("There was an error reading the file!", err);
//         return;
//     }
//     //data 처리
// });

// const net = require("net");
// const connection = net.connect("localhost");

// connection.on("error", (err) => {
//     console.error(err);
// });

// connection.pipe(process.stdout);

// const EventEmitter = require("events");
// const ee = new EventEmitter();

// setImmediate(() => {
//     ee.emit("error", new Error("This will crash"));
// });

// const fs = require("fs");

// function errorFirstCallback(err, data) {
//     if (err) {
//         console.error("There was an error", err);
//         return;
//     }
//     console.log(data);
// }
// fs.readFile("/some/file/that/does-not-exist", errorFirstCallback);
// fs.readFile("/some/file/that/does-exist", errorFirstCallback);

// const fs = require("fs");

// try {
//     fs.readFile("/some/file/that/does-not-exist", (err, data) => {
//         if (err) {
//             throw err;
//         }
//     });
// } catch (err) {
//     console.log(err);
// }

// const myObject = {};
// Error.captureStackTrace(myObject);
// myObject.stack;

// function MyError() {
//     Error.captureStackTrace(this, MyError);
// }
// new MyError().stack;

// const err = new Error("The message");
// console.error(err.message);

// const cheetahify = require("./native-binding.node");

// function makeFaster() {
//     cheetahify(function speedy() {
//         throw new Error("oh no");
//     });
// }

// makeFaster();

// require("net").connect(-1);

// doesNotExist;

// try {
//     requestAnimationFrame("vm").runInThisContext("binary ! isNotOk");
// } catch (err) {}

require("url").parse(() => {});
