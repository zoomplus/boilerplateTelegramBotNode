import { Message } from 'node-telegram-bot-api';
import { bot } from "../bot";
import User from '../model/User';
import {
    replyMarkup as welcomeReplyMarkup,
    getMessage as welcomeGetMessage
} from "../messages/user/welcome";
import {
    replyMarkup as registerReplyMarkup,
    getMessage as registerGetMessage,
    getError as registerGetError
} from "../messages/user/register";
import {
    replyMarkup as settingProfileReplyMarkup,
    getMessage as settingProfileGetMessage
} from "../messages/user/settingProfile";
import {
    replyMarkup as deleteReplyMarkup,
    getMessage as deleteGetMessage,
    getError as deleteGetError
} from "../messages/user/delete";

export const startUser = async (msg: Message, match: RegExpExecArray) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, welcomeGetMessage(msg.from.first_name), {
        reply_markup: welcomeReplyMarkup
    });
}

export const getPersonalInfo = async (msg: Message, match: RegExpExecArray) => {
    const userObject = new User();
    const chatId = msg.chat.id;
    const userInfo = await userObject.getById(msg.from.id);

    if(userInfo) {
        bot.sendMessage(chatId, registerGetMessage(userInfo.firstName, userInfo.botsCount), {
            reply_markup: registerReplyMarkup
        });
    } else {
        bot.sendMessage(chatId, 'Вы не зарегистрированы', {
            reply_markup: registerReplyMarkup
        });
    }
}

export const registerUser = async (msg: Message, match: RegExpExecArray) => {
    const userObject = new User();
    const chatId = msg.chat.id;
    const userId = await userObject.create({
        _id: msg.from.id,
        firstName: msg.from.first_name,
        lastName: msg.from.last_name,
        username: msg.from.username,
    });

    if(userId) {
        const userInfo = await userObject.getById(userId);

        bot.sendMessage(chatId, registerGetMessage(userInfo.firstName, userInfo.botsCount), {
            reply_markup: registerReplyMarkup
        });
    } else {
        bot.sendMessage(chatId, registerGetError(), {
            reply_markup: registerReplyMarkup
        });
    }
}

export const settingProfile = async (msg: Message, match: RegExpExecArray) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, settingProfileGetMessage(), {
        reply_markup: settingProfileReplyMarkup
    });
}

export const deleteUser = async (msg: Message, match: RegExpExecArray) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const userObject = new User();

    try {
        const result = await userObject.deleteById(userId);

        if(result) {
            bot.sendMessage(chatId, deleteGetMessage(), {
                reply_markup: deleteReplyMarkup
            });
        } else {
            bot.sendMessage(chatId, deleteGetError(), {
                reply_markup: deleteReplyMarkup
            });
        }
    } catch(e) {
        bot.sendMessage(chatId, deleteGetError(), {
            reply_markup: deleteReplyMarkup
        });
    }

}