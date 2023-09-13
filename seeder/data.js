const products = [
    {
        name: 'T-shirt',
        price: 500,
        category: 'Clothes'
    },
    {
        name: 'Pants',
        price: 700,
        category: 'Clothes'
    },
    {
        name: 'Shoes',
        price: 1000,
        category: 'Clothes'
    },
    {
        name: 'IPhone',
        price: 50000,
        category: 'Technology'
    },
    {
        name: 'Macbook',
        price: 100000,
        category: 'Technology'
    }
]

const users = [
    {
        email: 'userone@gmail.com',
        password: 'userone'
    },
    {
        email: 'usertwo@gmail.com',
        password: 'usertwo'
    },
    {
        email: 'admin@admin.com',
        password: 'adminadmin',
        isAdmin: true
    }
]

module.exports = { products, users }