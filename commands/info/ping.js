// ping.js

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Replies with Pong!',
	run: async (client, message) => {
		const pingEmbed = new MessageEmbed()
			.setTitle('🏓 pong!')
			.setColor('#cf1111')
			.setDescription('My ping was ' + Math.round(client.ws.ping) + ' ms!');

		message.channel.send({ embeds: [pingEmbed] });
	},
};