const Customer = require("../models/customer");
const Order = require("../models/order");
const path = require("path");

const { fn, col } = require("sequelize");

const toLoginForm = async (req, res) => {
  const { id, password } = req.query;

  if (!id || !password) {
    res.render(path.join(__dirname, "../views/login.hbs"), { content: 'Please provide both id and password' });
    return; 
  }

  try {
    const customerFind = await Customer.findAll({
      where: { id: id, password: password }
    });

    if (customerFind.length === 0) {
      res.render(path.join(__dirname, "../views/login.hbs"), { content: 'Please check your id and password' });
    } else if (customerFind[0].id === 'admin' && customerFind[0].password === 'admin') {
      res.redirect("/admin");
    } else if (customerFind[0].id === id && customerFind[0].password === password) {
      res.redirect("/orderdetails");
    } else {
      res.render(path.join(__dirname, "../views/login.hbs"), { content: 'Please check your id and password' });
    }
  } catch (error) {
    res.status(500).send("An error occurred");
    console.error(error);
  }
};

const orderpage = (req, res) => {
  res.render(path.join(__dirname, "../views/orderform.hbs"));
};

const orderdetails = async (req, res) => {
  try {
    let info = {
      orderdate: req.body.orderdate,
      customer: req.body.customer,
      company: req.body.company,
      owner: req.body.owner,
      item: req.body.item,
      quantity: req.body.quantity,
      weight: req.body.weight,
      requestforshipment: req.body.requestforshipment,
      trackid: req.body.trackid,
      shipmentsize: req.body.shipmentsize,
      boxcount: req.body.boxcount,
      specification: req.body.specification,
      checklistquantity: req.body.checklistquantity,
    };
    const order = await Order.create(info);
    res.status(200).render(path.join(__dirname, "../views/orderform.hbs"));
    console.log(order);
  } catch (error) {
    res.status(500).send("An error occurred");
    console.error(error);
  }
};

const tableInfo = async (req, res) => {
  try {
    const customer1 = await Order.findAll({
      where: { customer: "customer1" },
      attributes: [
        [fn("sum", col("quantity")), "totalquantity1"],
        [fn("sum", col("weight")), "totalweight1"],
        [fn("sum", col("boxcount")), "totalboxcount1"],
      ],
      raw: true,
    });

    const customer2 = await Order.findAll({
      where: { customer: "customer2" },
      attributes: [
        [fn("sum", col("quantity")), "totalquantity2"],
        [fn("sum", col("weight")), "totalweight2"],
        [fn("sum", col("boxcount")), "totalboxcount2"],
      ],
      raw: true,
    });

    console.log(customer1);

    const rows = [
      [
        "Quantity",
        customer1[0].totalquantity1 ? customer1[0].totalquantity1 : "No value inserted",
        customer2[0].totalquantity2 ? customer2[0].totalquantity2 : "No value inserted",
        (customer2[0].totalquantity2 ? parseInt(customer2[0].totalquantity2) : 0) +
        (customer1[0].totalquantity1 ? parseInt(customer1[0].totalquantity1) : 0),
      ],
      [
        "Weight",
        customer1[0].totalweight1 ? customer1[0].totalweight1 : "No value inserted",
        customer2[0].totalweight2 ? customer2[0].totalweight2 : "No value inserted",
        (customer2[0].totalweight2 ? customer2[0].totalweight2 : 0) +
        (customer1[0].totalweight1 ? customer1[0].totalweight1 : 0),
      ],
      [
        "Box Count",
        customer1[0].totalboxcount1 ? customer1[0].totalboxcount1 : "No value inserted",
        customer2[0].totalboxcount2 ? customer2[0].totalboxcount2 : "No value inserted",
        (customer1[0].totalboxcount1 ? parseInt(customer1[0].totalboxcount1) : 0) +
        (customer2[0].totalboxcount2 ? parseInt(customer2[0].totalboxcount2) : 0),
      ],
    ];

    res.render(path.join(__dirname, "../views/admintable.hbs"), { rows: rows });
  } catch (error) {
    res.status(500).send("An error occurred");
    console.error(error);
  }
};

module.exports = { toLoginForm, orderdetails, orderpage, tableInfo };
