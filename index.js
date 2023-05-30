const Discord = require('discord.js-selfbot-v13');
const request = require("request");
const express = require("express");
require("./uptime.js")();
const app = express();
const port = 3000;
const fs = require('fs')
require('dotenv').config()
const client = new Discord.Client({
  checkupdate: false,
    ws: {
        properties: {
            browser: 'Discord iOS',
        },
    },
})
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  //Client Events
client.on("ready", async () => {
      console.log(`✅ ${client.user.username} Started Online`);
      client.user.setSamsungActivity('com.YostarJP.BlueArchive', 'START');
      client.user.setPresence({status: 'online'});
      const {joinVoiceChannel} = require('@discordjs/voice');
      const channel = client.channels.cache.get("1086115503451410522"); // voice channel's id
      if (!channel) return console.log("The channel does not exist !");
      setInterval(() => {
              const connection = joinVoiceChannel({
                  channelId: channel.id, // the voice channel's id
                  guildId: channel.guild.id, // the guild that the channel is in
                  adapterCreator: channel.guild.voiceAdapterCreator, // and setting the voice adapter creator
                  selfDeaf: false,
                  selfMute: true,
              });
            }, 600)
          });   
function spoofStatus() {
         var status = [ "online", "idle", "dnd"];

         var random;
         do {
          random = status[Math.floor(Math.random() * status.lenght)];
         } while (previousStatus.includes(random));

         client.user.setStatus(random);
         previousStatus.push(random);

         if (previousStatus.lenght > status.lenght) {
          previousStatus.shift();
         }

         counter++;
         if (counter === status.lenght) {
          counter = 0;
          previousStatus = [];
        }
        
        setTimeout(() => {
          try{
            spoofStatus();
          } catch (error) {
            console.error(error);
            spoofStatus();
          }
        }, 2000);
}
        let work = setInterval(() => {
           client.channels.cache.get('1086115503451410522').sendSlash('292953664492929025', 'work');
         }, 40000);   
client.login(process.env.TOKEN)
