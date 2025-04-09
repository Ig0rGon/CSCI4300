import mongoose, { Schema, Document, Model } from "mongoose";

interface Item extends Document {
    name: string;
    description: string;
    age: number;
}

const itemSchema = new Schema<Item>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    age: { type: Number, required: true },
});

const ItemModel: Model<Item> = mongoose.models.Item || mongoose.model<Item>("Item", itemSchema);

export default ItemModel;
