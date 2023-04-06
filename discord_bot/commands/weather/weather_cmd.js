const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Provides the weather.')
		.addStringOption(option =>
			option.setName('location')
				.setDescription('The location to get the weather for')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('unit')
				.setDescription('The unit of measurement (imperial, metric, or kelvin)')
				.setRequired(true)),
	async execute(interaction) {
		const location = interaction.options.getString('location');
		console.log(location);
    	const unit = interaction.options.getString('unit');

		axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + process.env.WEATHER_API_TOKEN + "&units=" + unit)
		.then(response => {
			console.log(response);
			let reply = `The weather in ${location} is ${response.data.main.temp}`;
			switch (unit) {
				case "imperial":
					reply+=`°F!`;
					break;
				case "metric":
					reply+=`°C!`;
					break;
				default:
					reply+=` kelvins!`;
					break;
			}
			interaction.reply(reply);
		})
		.catch(error => {
			console.log("Error code is " + error.code);
			interaction.reply(`Error! One or more arguments were invalid!`);
		});
	},
};