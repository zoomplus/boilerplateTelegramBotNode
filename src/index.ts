import {registerUser, startUser, deleteUser, settingProfile, getPersonalInfo} from "./controller/user";
import { getAbout, getRules } from "./controller/info";
import { createBot, getListBot, getBot, deleteBot } from "./controller/bot";
import { bot } from "./bot";

//command
bot.onText(/\/start/, startUser);

//messages
bot.onText(/Зарегистрироваться/, registerUser);
bot.onText(/Правила/, getRules);
bot.onText(/О Ботоводе/, getAbout);
bot.onText(/Личный кабинет/, getPersonalInfo);

//can use only registered user
//TODO 1) middleware checker
//TODO 2) routes
//TODO ...

//User
bot.onText(/Настройки профиля/, settingProfile);
bot.onText(/Удалить профиль/, deleteUser);

//Bots
bot.onText(/Создать бота/, createBot);
bot.onText(/Список ботов/, getListBot);
bot.onText(/@[А-Яа-яA-Za-z]/, getBot);
bot.onText(/Удалить бота/, deleteBot);