// message.js

module.exports = {
	name: 'messageCreate',
	async execute(message) {
		const prefix = message.client.config.prefix;
		// ignores if there isn't a prefix or a bot uses the prefix
		if (!message.content.startsWith(prefix) || message.author.bot) return;

		// cut out the prefix so only the content is seen
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		const command = message.client.commands.get(args.shift().toLowerCase());

		if (!command) return;

		try {
			await command.run(message.client, message, args);
		}
		catch (error) {
			console.error(error);
			await message.channel.send('Sorry, something went wrong! pester hue about it.');
		}
	},
};