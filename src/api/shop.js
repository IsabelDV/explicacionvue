const product = [
    {
        id: 1,
        title: "BMW 320 '92",
        price: "30000",
        inventory: 10
    },
    {
        id: 2,
        title: "Mustang Boss 429 '69",
        price: "60000",
        inventory: 10
    },
    {
        id: 3,
        title: "Dodge Charger Bullit '69",
        price: "90000",
        inventory: 10
    }
];

export default {
    getProducts(pepito) {
        setTimeout(() => pepito(product), 100);
    }
};