const Discord = require('discord.js')
const Commands = require('./commands.js')

let mybot = new Discord.Client()
let sessions = {}
let commands = new Commands(sessions)

mybot.on('ready', () => {
   console.log('Let\'s have a meaningless fight to the death')
})

mybot.on('message', (message) => {
   let text = message.content
   if (text.substring(0, 4) !== '/kr ') { return }
   commands.validate(message)
});

mybot.loginWithToken('MjE5NjczOTY0MjQ1NDE3OTk0.CqVRLA.sMtqD6ZwvfyGc1sfd64AZ4KPaHU')
