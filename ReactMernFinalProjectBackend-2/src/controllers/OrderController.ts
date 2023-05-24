import { Request, RequestHandler, Response } from "express";
import { Order } from "../models/Order";
import { Item } from "../models/Item";

export default class OrderController {
  placeOrder: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { orderID } = req.body;
      console.log(req.body);

      let order = await Order.findOne({ orderID: orderID });
      // let order1 = new Order(req.body);
      let { orderQty, bookID } = req.body;
      let item = await Item.findOne({ bookID: bookID });
      

      if (!order&&item) {
        let order = new Order(req.body);
        let newOrder;
        if(order.orderQty<=item?.qtyOnHand){
           newOrder = await order.save();
        }else{
          throw new Error("Unknown error occurred...!");
          
        }
        // let newOrder = await order.save();
        // let { orderQty, bookID } = newOrder;
        // let item = await Item.findOne({ bookID: bookID });
        if (item && item.qtyOnHand >= orderQty) {
          item.qtyOnHand -= orderQty;
          await Item.findOneAndUpdate({ bookID: bookID }, item);
        }

        return res.json({
          message: "New Order added.!",
          responseData: newOrder,
        });
      } else {
        return res.status(200).json({ message: "Already exists." });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occurred!" });
      }
    }
  };

  getAllOrders: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let order = await Order.find();
      return res.status(200).json({ responseData: order });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  deleteOrder: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      // destructuring assignment
      const { id } = req.params;

      let deleteOrder = await Order.findOneAndDelete({ orderID: id });

      if (!deleteOrder) {
        throw new Error("Failed to delete Delevary.");
      }

      return res
        .status(200)
        .json({ message: "Order deleted.", responseData: deleteOrder });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };
}
