require("dotenv").config()
const Discord = require("discord.js")
const client = new Discord.Client()

const TOKEN = process.env.TOKEN

client.login(TOKEN)

client.on("ready", () => {
  console.info(`Logged in as ${client.user.tag}`)
})

queue = []

client.on("message", (msg) => {
  if (msg.author.bot) return
  if (msg.channel.type === 'dm') {
    msg.reply(`There are ${queue.length} ahead of you`)
    queue.push(msg)
    client.channels.cache.get("871826931392323676").send(msg)
  }
})

client.on('messageReactionAdd', (reaction, user) => {
  if (reaction._emoji.name === '👍') {
    queue[0].reply(`${user.username} is ready for you, meet in their voice channel!`)
    queue.shift()
  }
})

