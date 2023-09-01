const TelegraBot = require("node-telegram-bot-api");
const token = "6634801188:AAFE0jH58HMJQ9rgSQYOKVwMwzWIsNlKNwI";

const bot = new TelegraBot(token, { polling: true });

const bootstrap = () => {
  bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === "/start") {
      await bot.sendMessage(
        chatId,
        "Online.cours platformasidagi video kurslarni sotib olishingiz mumkun",
        {
          reply_markup: {
            keyboard: [
              [
                {
                  text: "Kurslarni ko'rish",
                  web_app: {
                    url: "https://sammi.ac",
                  },
                },
              ],
            ],
          },
        }
      );
    }
  });
};
bootstrap();
