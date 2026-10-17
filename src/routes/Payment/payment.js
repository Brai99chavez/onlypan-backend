const Stripe = require('stripe');
const { Order, User, Product } = require('../../db');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const payment = async (req, res) => {
  const { id, amount, delivery, obj } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      payment_method: id,
      confirm: true,
    });
    console.log(obj);
    const newOrder = await Order.create({ totalPrice: amount, delivery });
    const buyer = await User.findByPk(obj.idUser);
    buyer.update({address : obj.direccion})
    buyer.update({phone : obj.numero})
    await newOrder.setUser(buyer);

    obj.idProducts.forEach(async (prod) => {
      const idProd = await Product.findByPk(prod.id);
      idProd.update({quantity:idProd.quantity - prod.quantity});
      newOrder.addProduct(idProd, { through: { quantity: prod.quantity } });
    });

    res.send(payment);
  } catch (error) {
    res.send({ error: error.raw.code });
  }
};
module.exports = {
  payment,
};
