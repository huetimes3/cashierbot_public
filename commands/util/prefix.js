// prefix.js

module.exports = {
	name: 'prefix',
	description: 'set my prefix!',
	run: async (client, message, args) => {
		// if user can manage server allows changing of prefixes
		if (message.member.permissions.has(['MANAGE_GUILD'])) {
			// makes the new prefix the first thing that came after the command, ignoring anything after spaces
			if (args.length === 0) {message.channel.send(`The current prefix is '${client.config.prefix}'`);}
			else {
				try {
					const newPrefix = args[0];
					client.config.prefix = newPrefix;
					message.channel.send(`Prefix has been changed to ${newPrefix}`);
				}
				catch (error) {
					console.error(error);
					await message.channel.send('Sorry, something went wrong! pester hue about it.');
				}
			}
		}
		else {
			message.channel.send(`The current prefix is '${client.config.prefix}'`);
		}
	},
};
