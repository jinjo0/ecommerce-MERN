import express from 'express'
import {addOrderItems, getOrderById, updateOrderToPaid,getMyOrders, getOrders, updateOrderToDelivered} from "../controllers/orderController.js"
import {protect, admin} from "../middleware/authMiddleware.js"

const router =express.Router()


router.route('/')
    .post(protect, addOrderItems)
    .get(protect,admin, getOrders)
router.route('/:id').get(protect,getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect,admin, updateOrderToDelivered)
router.route('/me/myorders').get(protect,getMyOrders)
export default router