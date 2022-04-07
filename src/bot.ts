import 'dotenv/config';
import TelegramBot from 'node-telegram-bot-api';
// @ts-ignore
import { use } from 'node-telegram-bot-api-middleware';

export const bot = new TelegramBot(process.env.TOKEN, {
    polling: true
});
