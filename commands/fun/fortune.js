// fortune.js

const fse = require('fs-extra');
const path = require('path');
const forPath = path.join(__dirname, '../../assets/fortunes.json');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	name: 'fortune',
	description: 'Open up a fortune cookie!',
	run: async (client, message) => {
		// loads the fortunes from the json
		const fortunes = await fse.readJson(forPath);

		// checks to see if there's any fortunes in the array
		if (fortunes.length > 0) {
			// creates the embed for fortunes
			const fortuneEmbed = new MessageEmbed().setTitle('🥠 Fortune');
			let quote = fortunes[Math.floor(Math.random() * fortunes.length)];
			fortuneEmbed.setColor('#530182');
			fortuneEmbed.setDescription(quote);

			const newFortune = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('fortuneButton')
						.setStyle('SECONDARY')
						.setEmoji('🥠'),
				);

			const repl = await message.channel.send({ embeds: [fortuneEmbed], components: [newFortune] });

			const collector = repl.createMessageComponentCollector({
				max: '25',
				time: '15000',
			});

			collector.on('collect', (click) => {
				if (click.user.id === message.author.id) {
					quote = fortunes[Math.floor(Math.random() * fortunes.length)];
					fortuneEmbed.setDescription(quote);
					click.update({ embeds: [fortuneEmbed], components: [newFortune] });
				}
				// if the user that clicked wasn't the original author
				else {
					click.reply({ content: 'These fortunes aren\'t yours!', ephemeral: true });
				}
			});

			collector.on('end', (collected) => {
				console.log(`Collected ${collected.size} clicks`);
				newFortune.components[0].setDisabled(true);
				repl.edit({ embeds: [fortuneEmbed], components: [newFortune] });
			});

		}
		else {
			message.channel.send('There aren\'t any Fortunes!');
		}
	},
};