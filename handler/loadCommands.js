// loadCommands.js

function loadCommands(client) {
	const fse = require('fs-extra');
	const ascii = require('ascii-table');
	const table = new ascii().setHeading('Commands', 'Load Status');

	const commandFolders = fse.readdirSync('./commands');
	for (const folder of commandFolders) {
		const commandFiles = fse
			.readdirSync(`./commands/${folder}`)
			.filter((file) => file.endsWith('.js'));
		for (const file of commandFiles) {
			const command = require(`../commands/${folder}/${file}`);
			if (command.name) {
				client.commands.set(command.name, command);
				table.addRow(file, '✔️');
			}
			else {
				table.addRow(file, '❌ => Missing a help.name or help.name is not in string');
				continue;
			}
			if (command.aliases && Array.isArray(command)) {
				command.aliases.forEach((alias) => client.aliases.set(alias, command.name));
			}
		}
	}
	console.log(table.toString());
}

module.exports = {
	loadCommands,
};