require('dotenv').config();
const axios = require('axios');

// Thay bằng Webhook URL mà bạn đã nhận từ Slack
const webhookUrl = process.env.SLACK_WEBHOOK_CHART_BOT;

exports.sendMessage = async (req, res) => {
	try {
    const response = await axios.post(webhookUrl, {
      text: 'test demo',  // Nội dung tin nhắn
    });
       res.status(response.status).json({status: true, data: response.data});
  } catch (err) {
       res.status(500).json({status: false, error: err});
  }
};