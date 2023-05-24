import { Request, RequestHandler, Response } from "express";
import { Delevary } from "../models/Delevary";

export default class DelevaryController{

    saveDelevary:RequestHandler =async (req:Request,res:Response):Promise<Response> => {

               try{
                const {companyID} =req.body;
                console.log(req.body);
                
        
                let delevary=await Delevary.findOne({companyID:companyID});
        
                if(!delevary){
                   let  delevary=new Delevary(req.body);
                    let newdelevary=await delevary.save();
        
                    return res.json({ message: "New Delevary Service added.!", responseData: newdelevary });
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
    }

    getAllDelevary:RequestHandler =async (req:Request,res:Response):Promise<Response> => {
        try {
            let delevary = await Delevary.find();
            return res.status(200).json({ responseData: delevary });
          } catch (error: unknown) {
            if (error instanceof Error) {
              return res.status(500).json({ message: error.message });
            } else {
              return res.status(500).json({ message: "Unknown error occured." });
            }
          }
        // return res;
    }

    updateDelevary:RequestHandler =async (req:Request,res:Response):Promise<Response> => {
        try {
            // destructuring assignment
            const { id } = req.params;
      
            let updatedDelevary = await Delevary.findOneAndUpdate({companyID:id}, req.body, {
              new: true,
            });
            return res
              .status(200)
              .json({ message: "Delevary updated.", responseData: updatedDelevary });
          } catch (error: unknown) {
            if (error instanceof Error) {
              return res.status(500).json({ message: error.message });
            } else {
              return res.status(500).json({ message: "Unknown error occured." });
            }
          }
        // return res;
    }

    deleteDelevary:RequestHandler =async (req:Request,res:Response):Promise<Response> => {
        try {
            // destructuring assignment
            const { id } = req.params;
      
            let deleteDelevary = await Delevary.findOneAndDelete({companyID:id});
      
            if (!deleteDelevary) {
              throw new Error("Failed to delete Delevary.");
            }
      
            return res
              .status(200)
              .json({ message: "Delevary deleted.", responseData: deleteDelevary });
          } catch (error: unknown) {
            if (error instanceof Error) {
              return res.status(500).json({ message: error.message });
            } else {
              return res.status(500).json({ message: "Unknown error occured." });
            }
          }
        // return res;
    }

}