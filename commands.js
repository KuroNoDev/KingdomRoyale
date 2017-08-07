const msg_info = require('./messages/info.js')
const msg_classes = require('./messages/classes.js')

module.exports = class Commands {
   constructor (sessions) {
      this.sessions = sessions
      this.availableCommands = ['info', 'classes', 'announce', 'start', 'join']
   }

   validate (message) {
      let command = message.content.split(' ')[1]
      let param = message.content.split(' ')[2]

      if (this.availableCommands.indexOf(command) == -1) {
         message.reply('« Do yOu rEaLLy tHink I\'ll do thAt foR You? You ovERfamilliAr piEce of shiT! »')
         return
      }

      let channel = message.channel.id
      let player = message.author.id

      switch (command) {
         case 'info':
            message.channel.sendMessage(msg_info)
            break
         case 'classes':
            message.channel.sendMessage(msg_classes)
            break
         case 'announce':
            message.channel.sendMessage(`« ${param} »`)
            break
         case 'start':
            if (this.sessions.hasOwnProperty(channel) === true) {
               message.reply('« The gAme aLready staRted! »')
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
               message.reply('« arE You REtarded? Oh I sEe, yOu wAnt to pLAy by youRsElf? GeEz how boRed aRe yoU? »')
               return false
            }

            if (this.sessions[channel].hasOwnProperty(player) === true) {
               message.reply('« Can\'t bElieve you\'re aLreAdy part of tHe game EH?! »')
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

            message.reply('« I can sEe yOu\'rE eaGer to pArtiCipate in The game! Check your PM to know your class »')
            message.author.sendMessage(`Your role is ${this.sessions[channel][player].class}`)
            message.channel.sendMessage(`Remaining slots: ${classes.length}`)
         default:
            return false
      }
   }
}
