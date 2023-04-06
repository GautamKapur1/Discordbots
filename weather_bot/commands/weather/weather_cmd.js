const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Provides the weather.'),
	async execute(interaction) {
		await interaction.reply(`This command was run by ${interaction.user.username}`);
	},
};