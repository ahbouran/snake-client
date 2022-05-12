const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data.toString())
    })
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server')
    conn.write("Name: AHB")
    /*conn.write("Move: up")
    conn.write("Move: down")
    conn.write("Move: left"
    conn.write("Move: right")*/ 
  })



  return conn;
};

module.exports = {
  connect
}
