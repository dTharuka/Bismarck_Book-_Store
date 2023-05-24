import { Document, model, Schema } from "mongoose";

interface IDelevary extends Document{
    companyID:string;
    companyName:string;
    companyContact:string;
    companyEmail:string;
    companyAddress:string;
    delevarPrice:number;
}

const DelevarySchema = new Schema(
    {
        companyID:{
            type:String,
            required:true,
        },
        companyName:{
            type:String,
            required:true,
        },
        companyContact:{
            type:String,
            required:true,
        },
        companyEmail:{
            type:String,
            required:true,
        },
        companyAddress:{
            type:String,
            required:true,
        },
        delevarPrice:{
            type:Number,
            required:true,
        }
    }
);

export const Delevary=model<IDelevary>("Delevary",DelevarySchema);

