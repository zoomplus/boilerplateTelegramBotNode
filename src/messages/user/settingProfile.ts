import { KeyboardButton, ReplyKeyboard, Row } from "node-telegram-keyboard-wrapper";

const replyKeyboard = new ReplyKeyboard();
replyKeyboard.push(
    new Row(
        new KeyboardButton("Удалить профиль")
    )
);

export const replyMarkup = replyKeyboard.getMarkup();
export const getMessage = (): string => `
Выберите в пункте меню что сделать с профилем
`;
export const getError = (): string => `
Вы не зарегистрированы
`;