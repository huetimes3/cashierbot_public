// help.js

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Learn more about what I do!',
	run: async (client, message, args) => {
		const helpEmbed = new MessageEmbed();
		// if the user specified a command
		if (args[0]) {
			const command = client.commands.get(args[0]);
			// checks if command exists
			if (!command) {
				return message.channel.send(`That command doesn't exist. Try ${client.config.prefix}help to see everything I can do!`);
			}
			else {
				helpEmbed
					.setTitle(`${command.name}`)
					.addField('Description:', command.description ? command.description : 'No description available.')
					.setFooter({ text: 'Thank you for shopping with us <3', iconURL: 'https://cdn.discordapp.com/avatars/686437471868682256/04988c75bd60616af1393afec5fdecf0.webp?size=160' })
					.setColor('#6c4758');
			}
		}
		// deals with case of general help
		else {
			helpEmbed
				.setTitle('List of commands')
				.setFooter({ text: 'Thank you for shopping with us <3', iconURL: 'https://cdn.discordapp.com/avatars/686437471868682256/04988c75bd60616af1393afec5fdecf0.webp?size=160' })
				.setColor('#6c4758');

			for (const commandName of client.commands.keys()) {
				helpEmbed.addField(commandName, '\u200b');
			}
		}
		return message.channel.send({ embeds: [helpEmbed] });
	},
};