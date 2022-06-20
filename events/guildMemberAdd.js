// guildMemberAdd.js

const { welcomeChannel, defaultRole } = require('../config.json');

module.exports = {
	name: 'guildMemberAdd',
	async execute(member) {
		// set designated hello/goodbye channel, and role
		const channel = member.guild.channels.cache.find(ch => ch.name === welcomeChannel);
		const role = member.guild.roles.cache.find(r => r.name === defaultRole);

		// make it so this doesn't break on other servers yet (bandaid solution), closes this whole function on servers without front-doors
		if (!channel) return;
		channel.send(`<:chrislove:678932133250596904> Welcome <@${member.id}>! Please read the information in <#598635885986316319> for rules, and smile for the <#673512959665897472>!`);
		// add the role
		member.roles.add(role);
	},
};