import { Message } from 'node-telegram-bot-api';
import { bot } from "../bot";
import {
    replyMarkup as rulesReplyMarkup,
    getMessage as rulesGetMessage
} from "../messages/info/rules";
import {
    replyMarkup as aboutReplyMarkup,
    getMessage as aboutGetMessage
} from "../messages/info/about";

export const getRules = async (msg: Message, match: RegExpExecArray) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, rulesGetMessage(), {
        reply_markup: rulesReplyMarkup
    });
}

export const getAbout = async (msg: Message, match: RegExpExecArray) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, aboutGetMessage(), {
        reply_markup: aboutReplyMarkup
    });
}
