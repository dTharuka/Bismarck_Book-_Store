import express, { Router } from "express";
import OrderController from "../controllers/OrderController";

export default class OrderRoutes{
    private router:Router=express.Router();
    private controller:OrderController=new OrderController();

    constructor(){
        this.configRoutes(); 
     }

    private configRoutes=(): void =>{
        this.router.post("/",this.controller.placeOrder);
        this.router.get("/",this.controller.getAllOrders);
        // this.router.put("/:id",this.controller.updateCustomer);
        this.router.delete("/:id",this.controller.deleteOrder);
    };

    public getRouter=() : Router =>{
        return this.router;
    }
}