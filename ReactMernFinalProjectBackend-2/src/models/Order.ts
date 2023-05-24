import { Document, model, Schema } from "mongoose";

interface IOrder extends Document{
    orderID:string;
    orderQty:number;
    customerID:string;
    customerName:string;
    bookID:string;
    bookName:string;
    companyID:string;
    companyName:string;
    orderAmount:number;

}



const OrderSchema=new Schema(
    {
        orderID:{
            type:String,
            required:true,
        },
        orderQty:{
            type:Number,
            required:true,
        },
        customerID:{
            type:String,
            required:true,
        },
        customerName:{
            type:String,
            required:true,
        },
        bookID:{
            type:String,
            required:true,
        },
        bookName:{
            type:String,
            required:true,
        },
        companyID:{
            type:String,
            required:true,
        },
        companyName:{
            type:String,
            required:true,
        },
        orderAmount:{
            type:Number,
            required:true,
        }
    }
);

export const Order=model<IOrder>("Order",OrderSchema);