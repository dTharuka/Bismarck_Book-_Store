import express, { Router } from "express";
import ItemController from "../controllers/ItemController";

export default class ItemRoutes{
    private router:Router = express.Router();
    private controller:ItemController=new ItemController();

    constructor(){
        this.configRoutes();
    }

    private configRoutes=(): void =>{
        this.router.post("/",this.controller.saveItem);
        this.router.get("/",this.controller.getAllItem);
        this.router.put("/:id",this.controller.updateItem);
        this.router.delete("/:id",this.controller.deleteItem);
    };

    public getRouter=() : Router =>{
        return this.router;
    } 
}