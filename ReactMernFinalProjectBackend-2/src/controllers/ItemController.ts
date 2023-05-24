import { Request, RequestHandler, Response } from "express";
import { Item } from "../models/Item";

export default class ItemController{

saveItem:RequestHandler =async (req:Request,res:Response):Promise<Response> => {
    try{
        const {bookID} =req.body;
        console.log(req.body);
        

        let item=await Item.findOne({bookID:bookID});

        if(!item){
           let  item=new Item(req.body);
            let newitem=await item.save();

            return res.json({ message: "New item added.!", responseData: newitem });
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

getAllItem:RequestHandler =async (req:Request,res:Response):Promise<Response> => {
    try {
        let item = await Item.find();
        return res.status(200).json({ responseData: item });
      } catch (error: unknown) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        } else {
          return res.status(500).json({ message: "Unknown error occured." });
        }
      }

}

updateItem:RequestHandler =async (req:Request,res:Response):Promise<Response> => {
    try {
        // destructuring assignment
        const { id } = req.params;
  
        let updatedItem = await Item.findOneAndUpdate({bookID:id}, req.body, {
          new: true,
        });
        return res
          .status(200)
          .json({ message: "Item updated.", responseData: updatedItem });
      } catch (error: unknown) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        } else {
          return res.status(500).json({ message: "Unknown error occured." });
        }
      }
}

deleteItem:RequestHandler =async (req:Request,res:Response):Promise<Response> => {
    try {
        // destructuring assignment
        const { id } = req.params;
  
        let deletedItem = await Item.findOneAndDelete({bookID:id});
  
        if (!deletedItem) {
          throw new Error("Failed to delete Item.");
        }
  
        return res
          .status(200)
          .json({ message: "Item deleted.", responseData: deletedItem });
      } catch (error: unknown) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        } else {
          return res.status(500).json({ message: "Unknown error occured." });
        }
      }
}

}