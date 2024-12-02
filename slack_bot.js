const { WebClient } = require('@slack/web-api');
require('dotenv').config();

// Khởi tạo WebClient với Slack Bot Token
const token = process.env.SLACK_BOT_TOKEN;
const web = new WebClient(token);

// ID kênh Slack mà bạn muốn gửi tin nhắn
const channelId = process.env.SLACK_CHANNEL_ID;

async function sendMessage() {
    try {
        // Gửi tin nhắn đến Slack channel
        const result = await web.chat.postMessage({
            channel: channelId,
            text: 'Hello, this is a message from Node.js app!',
        });
        console.log('Message sent: ', result.ts);
    } catch (error) {
        console.error('Error sending message: ', error);
    }
}

sendMessage();