const axios = require("axios");



const express = require('express');
const axios = require('axios');



app.post('/register', async (req, res) => {
    const botToken = "5932060759:AAGCWrPrIqs-QlP-_df1Szd2n2SmzQeuJ2c";
    const chatId = -4777501838;
  try {
    const { name, phone } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ message: 'Имя и номер телефона обязательны' });
    }

    const message = `📢 Новый участник зарегистрирован:\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

    // Отправка сообщения в Telegram
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
    });

    res.status(200).json({ message: 'Участник зарегистрирован, уведомление отправлено' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка отправки уведомления' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

const app = express();
app.use(express.json());