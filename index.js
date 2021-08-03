require("dotenv").config()
const Discord = require("discord.js")
const client = new Discord.Client()

const TOKEN = process.env.TOKEN

client.login(TOKEN)

client.on("ready", () => {
  console.info(`Logged in as ${client.user.tag}`)
})

queueLength = 0

client.on("message", (msg) => {
  if (msg.author.bot) return
  console.log("Adding to q")
  if (msg.channel.type === "dm") {
    msg.reply(`There are ${queueLength} ahead of you`)
  }
  queueLength++
  console.log("Added")

  client.channels.cache.get("871826931392323676").send(msg)
})

client.on("messageReactionAdd", (reaction, user) => {
    console.log(reaction)
    }
  )

// DM queue channel = 837059946352869456
