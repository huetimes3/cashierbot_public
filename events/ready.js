// ready.js
const { prefix } = require('../config.json');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.user.setActivity('for ' + prefix, { type: 'WATCHING' });
		console.log(`Ready to serve on ${client.guilds.cache.size} servers!`);
	},
};