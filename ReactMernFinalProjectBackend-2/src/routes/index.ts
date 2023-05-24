import { Router } from "express";
import CustomerRoutes from "./CustomerRoutes";
import DelevaryRoutes from "./DelevaryRoutes";
import ItemRoutes from "./ItemRoutes";
import OrderRoutes from "./OrderRoutes";


const baseUrl="/api/v1/";
const router:Router=Router();
router.use(`${baseUrl}customer`,new CustomerRoutes().getRouter());
router.use(`${baseUrl}item` ,new ItemRoutes().getRouter());
router.use(`${baseUrl}delevary` ,new DelevaryRoutes().getRouter());
router.use(`${baseUrl}order` ,new OrderRoutes().getRouter());

export default router;