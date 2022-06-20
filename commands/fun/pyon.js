// pyon.js
// literally a meme

module.exports = {
	name: 'pyon',
	description: 'pyon!',
	run: async (client, message) => {
		message.channel.send('<:pyon:679235392104431636>').catch(console.error);
	},
};