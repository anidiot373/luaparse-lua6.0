const luaparse = require("./index")

var parser = luaparse.parse('x >>= 15.5', { luaVersion: "6.0" })

console.log(JSON.stringify(parser, null, 2));