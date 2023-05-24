import { Request, RequestHandler, Response } from "express";
import { Customer } from "../models/Customer";

export default class CustomerController{

    saveCustomer:RequestHandler =async (req:Request,res:Response):Promise<Response> => {

        try{
          const {customerID} =req.body;
          console.log(req.body);
          
  
          let customer=await Customer.findOne({customerID:customerID});
  
          if(!customer){
             let  customer=new Customer(req.body);
              let newcustomer=await customer.save();
  
              return res.json({ message: "New customer added.!", responseData: newcustomer });
          }else {
              return res.status(200).json({ message: "Already exists." });
            }
            
          } catch (error:unknown) {
              if(error instanceof Error) {
               return res.status(500).json({message:error.message})
              }else{
               return res.status(500).json({message:"Unknown error occurred!"})
              }
             }
    };

    getAllCustomers:RequestHandler =async (req:Request,res:Response):Promise<Response> => {

        try {
            let customer = await Customer.find();
            return res.status(200).json({ responseData: customer });
          } catch (error: unknown) {
            if (error instanceof Error) {
              return res.status(500).json({ message: error.message });
            } else {
              return res.status(500).json({ message: "Unknown error occured." });
            }
          }

        // return res;
    };

    updateCustomer:RequestHandler =async (req:Request,res:Response):Promise<Response> => {

        try {
            // destructuring assignment
            const { id } = req.params;
      
            let updatedCustomer = await Customer.findOneAndUpdate({customerID:id}, req.body, {
              new: true,
            });
            return res
              .status(200)
              .json({ message: "Customer updated.", responseData: updatedCustomer });
          } catch (error: unknown) {
            if (error instanceof Error) {
              return res.status(500).json({ message: error.message });
            } else {
              return res.status(500).json({ message: "Unknown error occured." });
            }
          }

        // return res;
    };

    deleteCustomer:RequestHandler =async (req:Request,res:Response):Promise<Response> => {

        try {
            // destructuring assignment
            const { id } = req.params;
      
            let deletedCustomer = await Customer.findOneAndDelete({customerID:id});
      
            if (!deletedCustomer) {
              throw new Error("Failed to delete post.");
            }
      
            return res
              .status(200)
              .json({ message: "Customer deleted.", responseData: deletedCustomer });
          } catch (error: unknown) {
            if (error instanceof Error) {
              return res.status(500).json({ message: error.message });
            } else {
              return res.status(500).json({ message: "Unknown error occured." });
            }
          }
    

        // return res;
    };
}