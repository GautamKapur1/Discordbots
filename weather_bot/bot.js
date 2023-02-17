require('dotenv').config(); //initialize dotenv
const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        //GatewayIntentBits.Message,
        //Intent is to message in the main chat
    ]
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//make sure this line is the last line
client.login(process.env.WEATHER_BOT_BOT_TOKEN); //login bot using token