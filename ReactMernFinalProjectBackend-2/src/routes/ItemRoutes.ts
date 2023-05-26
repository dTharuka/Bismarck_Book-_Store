import express, { Router } from "express";
import ItemController from "../controllers/ItemController";
import multer from "multer";

export default class ItemRoutes{
    private router:Router = express.Router();
    private controller:ItemController=new ItemController();

    constructor(){
        this.configRoutes();
    }

    private configRoutes=(): void =>{
        const storage = multer.diskStorage({
            destination: function (req, file, callback) {
              callback(
                null,
"F:\\BISMARCKFullStack\\frontend\\public\\uploads"              );
            },
      
            filename: function (req, file, callback) {
              callback(null, file.originalname);
            },
          });
          const upload = multer({ storage: storage });
        this.router.post("/",this.controller.saveItem);
        this.router.get("/",this.controller.getAllItem);
        this.router.put("/:id",this.controller.updateItem);
        this.router.delete("/:id",this.controller.deleteItem);
        this.router.put(
          "/image/:id",
          upload.single("files"),this.controller.saveImage
        );
    };

    public getRouter=() : Router =>{
        return this.router;
    } 
}