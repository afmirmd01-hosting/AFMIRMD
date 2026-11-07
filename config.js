const fs = require('fs');
const path = require('path');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "",
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "AFMIRMD-MD",
    OWNER_NAME: process.env.OWNER_NAME || "AFMiFmd",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "",
    WHATSAPP_CHANNEL: "https://whatsapp.com/channel/0029VbE3dzC1iUxgYDO6DA23",
    DESCRIPTION: process.env.DESCRIPTION || "Powered by AFMiFmd Bot"
};
