// cashierbot.js

const { Client, Collection, Intents } = require('discord.js');
const config = require('./config.json');
const { loadCommands } = require('./handler/loadCommands');
const { loadEvents } = require('./handler/loadEvents.js');

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_PRESENCES,
	],
});
client.config = config;

// prepares commands and events
client.commands = new Collection();
loadCommands(client);
loadEvents(client);

// prepares events given the events dir

client.login(config.token);