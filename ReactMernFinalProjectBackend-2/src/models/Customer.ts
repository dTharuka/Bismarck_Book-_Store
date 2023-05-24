import { Document, model, Schema } from "mongoose";

interface ICustomer extends Document{
    customerID:string;
    customerName:string;
    customerAddress:string;
    customerContact:string;
    customerEmail:string;
    customerSalary:string;
}

const CustomerSchema = new Schema(
    {
        customerID:{
            type:String,
            required:true,
        },
        customerName:{
            type:String,
            required:true,
        },
        customerAddress:{
            type:String,
            required:true,
        },
        customerContact:{
            type:String,
            required:true,
        },
        customerEmail:{
            type:String,
            required:true,
        },
        customerSalary:{
            type:String,
            required:true,
        }
    }
);

export const Customer=model<ICustomer>("Customer",CustomerSchema);