const infoMessage = require('./utils/infoMessage.js');

module.exports = class Commands {
   constructor (sessions) {
      this.sessions = sessions
      this.availableCommands = ['info', 'announce', 'start', 'join']
   }

   validate (message) {
      let command = message.content.split(' ')[1]
      let param = message.content.split(' ')[2]

      if (this.availableCommands.indexOf(command) == -1) {
         message.reply('« Do you really think I\'ll do that for you? You overfamilliar piece of shit! »')
         return
      }

      let channel = message.channel.id
      let player = message.author.id

      switch (command) {
         case 'info':
            message.channel.sendMessage(infoMessage)
            break
         case 'announce':
            message.channel.sendMessage(`« ${param} »`)
            break
         case 'start':
            if (this.sessions.hasOwnProperty(channel) === true) {
               message.reply('« OSOI! The game already started! »')
               return false
            }
            this.sessions[message.channel.id] = {
               state: {
                  classes: ['King', 'Double', 'Knight', 'Revolutionary', 'Prince', 'Sorcerer']
               }
            }
            message.channel.sendMessage('A game will start in this channel. Type `/kr join` to join\n« Let\'s have a meaningless fight to the death! »')
            break
         case 'join':
            if (this.sessions.hasOwnProperty(channel) === false) {
               message.reply('« Are you retarded? Oh I see, you want to die by yourself? »')
               return false
            }

            if (this.sessions[channel].hasOwnProperty(player) === true) {
               message.reply('« Can\'t believe you\'re already part of the game eh?! »')
               return false
            }

            let classes = this.sessions[channel].state.classes

            if (classes.length < 1) {
               message.reply('« Game is full, go jerk off somewhere »')
               return false
            }

            let index = Math.floor(Math.random() * ((classes.length - 1) - 0 + 1)) + 0
            let _class = this.sessions[channel].state.classes[index]

            this.sessions[channel][player] = {
               class: _class
            }

            classes.splice(index, 1)

            message.reply('« I can see you\'re eager to participate in the game! Check your PM to know your class »')
            message.author.sendMessage(`Your role is ${this.sessions[channel][player].class}`)
            message.channel.sendMessage(`Remaining slots: ${classes.length}`)

            console.log(this.sessions, this.sessions[channel].state.classes)
         default:
            return false
      }
   }
}
