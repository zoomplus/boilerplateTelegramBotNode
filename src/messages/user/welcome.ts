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
export const getMessage = (firstName: string): string => `
Привет, ${firstName}\n
Добро пожаловать в Ботовод\n
Зарегистрируйся чтобы начать создавать ботов\n
\n
После регистрации, ты попадешь в свой Личный Кабинет, где сможешь управлять своими ботами
`;