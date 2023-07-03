const Customer = require("../models/customer");
const Order = require("../models/order");
const path = require("path");

const { fn, col, where } = require("sequelize");




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
      item:req.body.item,
      count: req.body.count,
      weight: req.body.weight,
      requestforshipment: req.body.requestforshipment
    };

    const customer = await Customer.findOne({
      where: { id: req.body.id},
    });

    if (!customer) {
      throw new Error('Customer not found');
    }

    info.company = customer.id;  
    info.owner = customer.id;  

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
    const orders = await Order.findAll();

    const data = orders.map(order => {
      return {
        date: order.createdAt,
        company: order.company,
        owner: order.owner,
        item: order.item,
        count: order.count,
        weight: order.weight,
        requestforshipment: order.requestforshipment
      };
    });

    res.render(path.join(__dirname, "../views/admintable.hbs"), { data });
  } catch (error) {
    res.status(500).send("An error occurred");
    console.error(error);
  }
};




//updatepassword

const updatepasswordpage = (req,res)=>{
  res.status(200).render(path.join(__dirname, "../views/changePassword.hbs"));
}


const updatepassword = async (req, res) => {
  try {
    const id = decodeURIComponent(req.params.id);
    console.log(id);
    
    const updatepass = await Customer.update(
      {
        mobilenumber: req.body.mobilenumber,
        password: req.body.newpassword
      },
      {
        where: {
          id: 'juhosi' || 'yash'
        }
      }
    );
    res.status(200).redirect('/')
    console.log(updatepass);
  } catch (error) {
    console.error(error);
    res.status(500).render(path.join(__dirname, "../views/changePassword.hbs"));
  }
};


module.exports = { toLoginForm, orderdetails, orderpage, tableInfo,updatepasswordpage ,updatepassword};
