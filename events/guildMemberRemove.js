// guildMemberRemove.js
const { welcomeChannel } = require('../config.json');

module.exports = {
	name: 'guildMemberRemove',
	async execute(member) {
		// set a designated hello/goodbye channel, can't find the channels
		const channel = member.guild.channels.cache.find(ch => ch.name === welcomeChannel);
		// make it so this doesn't break on other servers yet (bandaid solution), closes this whole function on servers without front-doors
		if (!channel) return;
		// failed to fetch the members tag, look into wether or not we might need to have a database of users to keep track of
		channel.send(`<:chrisaying:678930944643563530> Thank you for shopping with us **${member.user.tag}**! We hope to see you again!`);
	},
};