import { Message } from 'node-telegram-bot-api';
import { bot } from "../bot";
import Bot from '../model/Bot';

export const createBot = async (msg: Message, match: RegExpExecArray) => {
    const botObject = new Bot();
    const chatId = msg.chat.id;
    const botId = await botObject.create({
        name: 'test',
        token: '1233312s23:das1dkdwdak123',
        userId: msg.from.id
    });

    if(botId) {
        const botInfo = await botObject.getById(botId);

        bot.sendMessage(chatId, 'Бот создан сделайте с ним ченить');
    } else {
        bot.sendMessage(chatId, 'Ошибка какая то');
    }
}

export const getListBot = () => {

}

export const getBot = () => {

}

export const deleteBot = () => {

}