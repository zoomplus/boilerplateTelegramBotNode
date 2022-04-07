import { Schema } from 'mongoose';
import db from '../db';
import BaseCRUD from "./BaseCRUD";
import User from "./User";
import { Nullable } from '../interfaces';

interface IBot {
    name: string;
    token: string;
    userId: number;
    configuration?: string;
}

class Bot extends BaseCRUD {
    #schema = new Schema({
        name: String,
        userId: Number,
        token: {
            type: String,
            unique: true
        },
        configuration: {
            type: String,
            default: null
        },
    });
    model = db.models.Bot || db.model('Bot', this.#schema);

    // typo CRUD methods
    async create(args: IBot): Nullable<Promise<number>> {
        const userObject = new User();
        const result = await super.create(args);
        const user = await userObject.getById(args.userId);
        const updatedUser = await userObject.updateById(args.userId, {
            botsCount: user.botsCount + 1
        });
        console.log(updatedUser);

        return result;
    }
    async getById(id: number): Nullable<Promise<IBot>> {
        return super.getById(id);
    }
    async updateById(id: number, data: IBot): Nullable<Promise<IBot>> {
        return super.updateById(id, data);
    }
    async deleteById(id: number): Promise<boolean> {
        return super.deleteById(id);
    }
}

export default Bot;