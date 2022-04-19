// import { strict as assert } from "assert";

// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, "3"]], 4, 5]);

// dns

// "type": "module"  => "type":"commonjs" 변경

const dns = require("dns");

dns.lookup("example.org", (err, address, family) => {
    console.log("address:%j family:IPv%s", address, family);
});

dns.resolve4("archive.org", (err, addresses) => {
    if (err) throw err;

    console.log(`addresses:${JSON.stringify(addresses)}`);

    addresses.forEach((a) => {
        dns.reverse(a, (err, hostnames) => {
            if (err) {
                throw err;
            }
            console.log(`reverse for ${a} : ${JSON.stringify(hostnames)}`);
        });
    });
});

try {
    const m = 1;
    const n = m + 2;
} catch (err) {}
