const net = require("net");
const { connect } = require("./client")
const{ setupInput} = require("./input");
let connection;
connection = connect()
console.log("Connecting ...");


setupInput(connection)




