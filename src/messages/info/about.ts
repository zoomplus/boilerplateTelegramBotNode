import { KeyboardButton, ReplyKeyboard, Row } from "node-telegram-keyboard-wrapper";

const replyKeyboard = new ReplyKeyboard();
replyKeyboard.push(
    new Row(
        new KeyboardButton("Зарегистрироваться")
    ),
    new Row(
        new KeyboardButton("Правила"),
        new KeyboardButton("О Ботоводе")
    )
);

export const replyMarkup = replyKeyboard.getMarkup();
export const getMessage = (): string => `
Ботовод это бот который создан для того чтобы вы могли просто и без всяких проблем
создать своего бота
`;