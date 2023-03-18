const db = require("../../helper/connection");
const { v4: uuidv4 } = require("uuid");

const orderModel = {

    getByUserId: (user_id)=> {
        return new Promise((resolve, reject)=> {
            db.query(
                `SELECT * from tb_order WHERE user_id='${user_id}'`,
                (err, result) => {
                    if (err) {
                    return reject(err.message)
                    } else {                     
                    return resolve(result.rows)
                    }
            });
        })
    },

    getOrderById: (order_id)=> {
        return new Promise((resolve, reject)=> {
            db.query(
                `SELECT * from tb_order WHERE order_id='${order_id}'`,
                (err, result) => {
                    if (err) {
                    return reject(err.message)
                    } else {                   
                    return resolve(result.rows[0])
                    }
            });
        })
    },    

    add: ({
      order_id,
      user_id,
      product_id,
      product_name,
      price,
      qty,
      tax,
      total_price, 
    }) => {
      return new Promise((resolve, reject) => {
        db.query(
          `INSERT INTO tb_order (order_id, user_id, product_id, product_name, price, qty, tax, total_price ) VALUES ('${uuidv4()}','${user_id}', 
          '${product_id}', '${product_name}', '${price}', '${qty}', '${tax}', 
          '${total_price}') RETURNING order_id`,
          (err, result) => {
            if (err) {
              return reject(err.message);
            } else {
              return resolve({
                order_id,
                user_id,
                product_id,
                product_name,
                price,
                qty,
                tax,
                total_price
              });
            }
          }
        );
      });
    },
};

module.exports = orderModel;
