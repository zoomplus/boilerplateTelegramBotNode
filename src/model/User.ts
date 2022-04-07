import { Schema } from 'mongoose';
import db from '../db';
import BaseCRUD from "./BaseCRUD";
import { Nullable } from '../interfaces';

interface IUser {
    _id: number;
    firstName: string;
    lastName: string;
    username: string;
    botsCount?: number;
}

class User extends BaseCRUD {
    #schema = new Schema({
        _id: {
            type: Number,
            index: true,
            unique: true
        },
        firstName: String,
        lastName: String,
        username: String,
        botsCount: {
            type: Number,
            default: 0
        },
    }, {_id: false});
    model = db.models.User || db.model('User', this.#schema);

    // typo CRUD methods
    async create(args: IUser): Nullable<Promise<number>> {
        return super.create(args);
    }
    async getById(id: number): Nullable<Promise<IUser>> {
        return super.getById(id);
    }
    async updateById(id: number, data: Partial<IUser>): Nullable<Promise<IUser>> {
        return super.updateById(id, data);
    }
    async deleteById(id: number): Promise<boolean> {
        return super.deleteById(id);
    }
}

export default User;