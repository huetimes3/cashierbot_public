// loadEvents.js

function loadEvents(client) {
	const fse = require('fs-extra');
	const path = require('path');

	const eventsPath = path.join(__dirname, '../events/');
	const eventFiles = fse.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

	for (const file of eventFiles) {
		const filePath = path.join(eventsPath, file);
		const event = require(filePath);
		if (event.once) {
			client.once(event.name, (...args) => event.execute(...args));
		}
		else {
			client.on(event.name, (...args) => event.execute(...args));
		}
	}
}

module.exports = {
	loadEvents,
};