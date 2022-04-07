"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const mainMenu_1 = __importDefault(require("./controls/mainMenu"));
const token = '5029193016:AAG4WbUThm5_AUbHV2nMKPAHiCGaaWiLtUY'; // тут токен кторый мы получили от botFather
// включаем самого обота
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
// обработчик события присылания нам любого сообщения
bot.on('message', (msg) => {
    const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал
    // отправляем сообщение
    bot.sendMessage(chatId, 'Привет, Друг! чего хочешь?', {
        reply_markup: {
            inline_keyboard: mainMenu_1.default
        }
    });
});
// обработчик событий нажатий на клавиатуру
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    let img = '';
    if (query.data === 'moreKeks') { // если кот
        bot.sendMessage(chatId, '1', {
            reply_markup: {
                inline_keyboard: mainMenu_1.default
            }
        });
    }
    if (query.data === 'morePes') { // если пёс
        bot.sendMessage(chatId, '2');
    }
});
