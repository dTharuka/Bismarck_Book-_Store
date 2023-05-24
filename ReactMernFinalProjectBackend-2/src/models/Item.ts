import { Document, model, Schema } from "mongoose";

interface IItem extends Document{
    bookID:string;
    bookName:string;
    catagory:string;
    photo:string;
    author:string;
    description:string;
    unitPrice:number;
    qtyOnHand:number;
    language:string;
}

const ItemSchema = new Schema(
    {
        bookID:{
            type:String,
            required:true,
        },
        bookName:{
            type:String,
            required:true,
        },
        catagory:{
            type:String,
            required:true,
        },photo:{
            type:String,
            required:true,
        },
        author:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        unitPrice:{
            type:Number,
            required:true,
        },
        qtyOnHand:{
            type:Number,
            required:true,
        },
        language:{
            type:String,
            required:true,
        }
    }
);

export const Item=model<IItem>("Item",ItemSchema);
