const db = require("quick.db")



module.exports.run = (client) => {
  console.log("AKU SIAP NI")
  //client.user.setActivity(db.get(`status`)); 
const status = [
    `Vengeance | Default prefix s?`,
    `${client.users.cache.size} Users`, //gunanya untuk count user
    `ServerCount ${client.guilds.cache.size} Servers` //gunanya untuk count server yang dimasuki oleh bot
    ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "STREAMING"}) //watching bisa kalian ganti sama playing dan semacamnya
  }, 5000)
} 