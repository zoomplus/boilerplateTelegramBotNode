import { KeyboardButton, ReplyKeyboard, Row } from "node-telegram-keyboard-wrapper";

const replyKeyboard = new ReplyKeyboard();
replyKeyboard.push(
    new Row(
        new KeyboardButton("Список ботов"),
        new KeyboardButton("Создать бота")
    ),
    new Row(
        new KeyboardButton("Настройки профиля")
    )
);

export const replyMarkup = replyKeyboard.getMarkup();
export const getMessage = (firstName: string, botsCount: number): string => `
Привет, ${firstName}, это твой Личный Кабинет\n
Создано ботов: ${botsCount}\n
`;
export const getError = (): string => `
Вы уже зарегистрированы
`