I couldn't decide what the name of the bot should be while developing it, so the bot's name might be referred to as either
DroSStAA, DroStAV, DStAA, etc. DM spicyTumors if there are any problems with the code. Code is intended to be run on windows
on VSCode, WebStorm, etc. when running locally (on laptop, PC, all that). Experimenting with 24/7 uptime on KOYEB.

NOTES:
-Procfile starts with "web:" so KOYEB health checks don't scream in console
-.env, credentials.json, and token.json are "keys" to the program & data, DO NOT SHARE PUBLICLY.
-Don't change stuff if you don't know what you're doing (hope thats obvious)
-Theres a dronescape discord account with a test server connected if you don't want to clutter the club channel testing stuff
(email: dronescapeclub@gmail.com, password: [same as the gmail account's password] )
-If it ain't broke don't fix it
-KOYEB utilizes uptimerobot.com to prevent it from going into deep sleep after 1 hour
-uptimerobot account is logged in through dronescapeclub@gmail.com github
-check uptimerobot status at http://stats.uptimerobot.com/s7d6ztQhdv

running on KOYEB:
1:login to KOYEB using dronescapeclub@gmail.com via. signing in through Github, NOT email
    1a: email used is dronescapeclub@gmail.com, password is [same as the gmail account's password]
2: might say "Your Koyeb Pro trial has expired" or something like that, click "manage account" near top right
3: select "dronescapeclub1" instead of "dronescapeclub" in dropdown near the top left, then press wait
4: click "drosstaav3" in "Overview" tab
5: click "Redeploy" button on top right to start/restart the bot
(make sure to check uptimerobot to see why it's shut down for whatever reason)

How to start bot locally on VSCode:
1: download Node.js onto computer
2: right click on the folder named "drosstaa3" and click "Open in Terminal"
3: in the command prompt that opens, type "code ." (WITHOUT THE QUOTATION MARKS)
4: open the console in VSCode (should be opened after step 3) and paste these following commands and press enter for each line:

node -v
npm init -y
npm install discord.js dotenv googleapis readline fs path striptags quoted-printable pm2


(dont worry about any vulnerabilities that pop up, I swear it wont steal anything...)

5: paste this command into console as well:

npm list --depth=0

...and something similar to this should show:

drosstaa3@1.0.0 C:\Users\Name\Downloads\drosstaa3
├── discord.js@14.19.2
├── dotenv@16.5.0
├── fs@0.0.1-security
├── googleapis@148.0.0
├── js-base64@3.7.7
├── path@0.12.7
├── quoted-printable@1.0.1
├── readline@1.3.0
└── striptags@3.2.0

6: If nothing strange appears, run this command in console to start up bot:

node bot.js

and this log should show up in console:

bot.js: #######BOT ONLINE#######
bot.js: Bot is online as DStAA#6802

(if error shows, try redownloading installations with step 4, or check step 5 for any discreptancies).

NOTE: IF THE COMPUTER SHUTS DOWN OR NODE.JS CANT ACCESS THE INTERNET, RUN STEP 6 IN CONSOLE TO REBOOT



Q&A: The bot is destroying the world, how can i shut it off?
               -doing Ctrl + C in the console will stop the bot from running until you do step 6 again.

     What are the funny values in token.json/.env?
               -dont touch it, its going to break the bot.


     Did you use AI to write this?
               -uhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh


yeah thats all
