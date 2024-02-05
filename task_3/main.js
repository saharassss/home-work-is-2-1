let product = {
    name: "phone",
    price: "59999",
    inStock: true,
    brand: "Samsung",
    specifications: {
        battery: "5000",
        camera: "50"
    },

    discount: {
        percentage: 7,
        expirationDate: "2024-02-15"
    }

}

let customer = {
    name: "Mary",
    budget: "70000"
};

if (customer.budget < product.price) {
    console.log("Недостаточно средств для покупки");
} else {
    console.log(`Вам доступно к приобретению ${product.name} цена ${product.price} рублей`);

    console.log(`Тех. характеристики - Батарея: ${product.specifications.battery}, Камера: ${product.specifications.camera}`);

    if (product.discount) {
        console.log(`Скидка ${product.discount.percentage}% до ${product.discount.expirationDate}`);
        let discountPrice = product.price - (product.price * product.discount.percentage / 100);
        console.log(`Цена с применненой скидкой: ${discountPrice} рублей`);
    }
}
