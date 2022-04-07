import { KeyboardButton, ReplyKeyboard, Row } from "node-telegram-keyboard-wrapper";

const replyKeyboard = new ReplyKeyboard();

export const replyMarkup = replyKeyboard.remove();
export const getMessage = (): string => `
Профиль удален
`;
export const getError = (): string => `
Вы не зарегистрированы
`