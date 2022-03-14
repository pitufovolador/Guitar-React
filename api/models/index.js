const db = require('./db');
const User = require('./Users');
const Product = require('./Products')
const Carrito = require('./Carrito')
const Order = require('./Orden')
const OrderItem = require('./OrderItem')
const CarritoItem = require('./Carritoitem')

// el usuario tiene 1 carrito
User.belongsToMany(Product ,{through: CarritoItem})
// el carrito pertenece al usuario
Product.belongsToMany(User,{through: CarritoItem})

/*
// el usuario tiene 1 carrito
User.hasOne(Carrito)
// el carrito pertenece al usuario
Carrito.belongsTo(User)
// la orden pertenece a los usuarios
Order.belongsTo(User)
//el usuario tiene 1 orden
User.hasMany(Order)
// la orden pertenece a muchos productos
Order.belongsToMany(Product,{through: OrderItem})
// el producto pertenece a muchos pedidos
Product.belongsToMany(Order,{through: OrderItem})
// carrito pertenece a muchos productos
Carrito.belongsToMany(Product,{through: CarritoItem})
// el producto pertenece a muchos carritos
Product.belongsToMany(Carrito,{through: CarritoItem})*/


module.exports = {db, User, Product, Carrito, CarritoItem, Order, OrderItem}