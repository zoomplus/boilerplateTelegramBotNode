import {Schema, Model} from "mongoose";
import { Nullable } from "../interfaces";

abstract class BaseCRUD {
    #schema: Schema;
    model: Model<any>;

    async create(args: any): Nullable<Promise<number>>{
        try {
            const created = await this.model.create(args);
            return created._id;
        } catch(e) {
            console.log(e);
            return null;
        }
    }

    async getById(id: number): Nullable<Promise<any>>{
        try {
            return await this.model.findById(id);
        } catch(e) {
            console.log(e);
            return null;
        }
    }

    async updateById(id: number, data: any): Nullable<Promise<any>>{
        try {
            return await this.model.findOneAndUpdate({_id: id}, data, {
                new: true
            });
        } catch (e) {
            console.log(e)
            return null;
        }
    }

    async deleteById(id: number): Promise<boolean>{
        try {
            return !!await this.model.findOneAndDelete({_id: id});
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

export default BaseCRUD;