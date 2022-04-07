"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//конфиг клавиатуры
const keyboard = [
    [
        {
            text: 'Хочу кота',
            callback_data: 'moreKeks' // данные для обработчика событий
        }
    ],
    [
        {
            text: 'Хочу песика',
            callback_data: 'morePes'
        }
    ],
    [
        {
            text: 'Хочу проходить курсы',
            url: 'https://htmlacademy.ru/continue' //внешняя ссылка
        }
    ]
];
exports.default = keyboard;
