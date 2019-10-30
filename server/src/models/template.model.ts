import mongoose, { Schema, Model } from "mongoose";

const TemplateSchema: Schema = new mongoose.Schema({
    firstname: String,
    surname: String,
    type: String,
    value: Number,
});

export interface ITemplate {
    firstname: string,
    surname: string,
    type: string,
    value: number,
}

export const Template: mongoose.Model<any> = mongoose.model("Template", TemplateSchema);