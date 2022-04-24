const mongoose = require("mongoose");
const Product = require('./models/product');


mongoose.connect('mongodb+srv://chadczilli:chadczilli@cluster0.qp2n1.mongodb.net/farmStand?retryWrites=true&w=majority')
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

// const p = new Product({
//     name: 'Grape Fruit',
//     price: 1.33,
//     category: 'Fruit'
// });
//
// p.save().then(() => {
//     console.log(p)
// }).catch(err => {
//     console.log(err)
// })

const seedProducts = [
    {
        name: 'Apple',
        price: 2.44,
        category: 'Fruit'
    },
    {
        name: 'Bananna',
        price: 1.23,
        category: 'Fruit'
    },
    {
        name: 'Orange',
        price: 0.89,
        category: 'Fruit'
    },
    {
        name: 'Broccoli',
        price: 3.99,
        category: 'Vegetable'
    },
    {
        name: 'Carrot',
        price: 0.54,
        category: 'Vegetable'
    },

]

Product.insertMany(seedProducts).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
});