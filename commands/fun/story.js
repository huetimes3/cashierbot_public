// story.js

const { storyChannel } = require('../../config.json');

module.exports = {
	name: 'story',
	description: 'gets the story so far!',
	run: async (client, message, args) => {
		const channel = message.guild.channels.cache.find(ch => ch.name === storyChannel);
		let num = parseInt(args[0]);
		if (isNaN(num) || num < 1) num = 1;

		channel.messages.fetch({ limit: num }).then(messages => {
			// obtains each message content and then reverses the order, turning into a string at the end
			let str = messages.map(msg => msg.content).reverse().join(' ');
			// if the content is over the limit, you cut it down
			if (str.length > 2000) str = str.substring(0, 1997) + '...';
			message.channel.send(str);
		});
	},
};