const orderModel = require("../models/order.models");
// const { unlink } = require("node:fs");

const orderController = {


    getByUserId: (req, res)=> {
        return orderModel.getByUserId(req.params.user_id)
        .then((result) => {
            return res.status(200).send({ message: "succes", data: result })
        })
    },
    getOrderById: (req, res)=> {
        return orderModel.getOrderById(req.params.order_id)
        .then((result) => {
            return res.status(200).send({ message: "succes", data: result })
        })
    },
    add: (req, res) => {
        const request = {
        ...req.body,
        }
        return orderModel
        .add(request)
        .then((result) => {
            return res.status(201).send({ message: "succes", data: result });
        })
        .catch((error) => {
            return res.status(500).send({ message: error });
        });
    },
};

module.exports = orderController;
