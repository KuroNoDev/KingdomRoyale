module.exports = `
« YaaYaaYaa - Do - you - feel - well? I am - Noitan - the mascot! PleaseD to - meet you »

----------- **Classes** ----------

__**King**__

*skills*

\`\`\`
[Murder]
He can select a player he wants to kill and request the [Sorcerer] or the [Knight] to execute this action. He does not need to select.
\`\`\`
\`\`\`
[Substitution]
He can once avoid being the target of [Assassination] by changing roles with [The Double] for a single day. If he was selected as the target on this day, [The Double] will die instead of the [King].
\`\`\`
*victory conditions*

\`\`\`
To protect his throne. (Elimination of the ones that threaten the king's throne - [Prince] [Revolutionary])
\`\`\`

__**Prince**__

*skills*

\`\`\`
[Throne Succession]
He becomes able to use [Murder] once the [King] and [The Double] die.
\`\`\`
\`\`\`
[Anti-magic]
He cannot be killed by [Sorcery].
\`\`\`
*victory conditions*

\`\`\`
To become the king. (Elimination of [King] [The Double] [Revolutionary])
\`\`\`

__**The Double**__

*skills*

\`\`\`
[Inheritance]
If the [King] dies or [Substitution] was executed, he becomes able to use [Murder].
\`\`\`
*victory conditions*

\`\`\`
Death of the ones that try to kill him. (Death of [Prince] [Revolutionary])
\`\`\`

__**Sorcerer**__

*skills*

\`\`\`
[Sorcery]
He can choose whether to effectively kill the character that was selected by [Murder]. The targeted character will become a burnt corpse.
\`\`\`
*victory conditions*

\`\`\`
To survive
\`\`\`

__**Knight**__

*skills*

\`\`\`
[Deathblow]
He can choose whether to effectively kill the character that was selected by [Murder]. Only executable when the [Sorcerer] is dead. The targeted character will die due to beheading.
\`\`\`
*victory conditions*

\`\`\`
To take revenge. (Death of [King] [Prince])
\`\`\`

__**Revolutionary**__

*skills*

\`\`\`
[Assassination]
He can assassinate the selected character. He does not need to select one. The targeted character will become a strangulated corpse.
\`\`\`
*victory conditions*

\`\`\`
To become the king. (Murder of [King] [Prince] [The Double])
\`\`\`
`
