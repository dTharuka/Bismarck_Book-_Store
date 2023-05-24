import express, { Router } from "express";
import DelevaryController from "../controllers/DelevaryController";

export default class DelevaryRoutes{
    private router:Router=express.Router();
    private controller:DelevaryController=new DelevaryController();

    constructor(){
        this.configRoutes();
    }

    private configRoutes=(): void =>{
        this.router.post("/",this.controller.saveDelevary);
        this.router.get("/",this.controller.getAllDelevary);
        this.router.put("/:id",this.controller.updateDelevary);
        this.router.delete("/:id",this.controller.deleteDelevary);
    }

    public getRouter=() : Router =>{
        return this.router;
    }
}