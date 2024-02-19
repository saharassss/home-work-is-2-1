let data = {
    location: "Рабоче-Крестьянская ул., 9Б, этаж 1",
    bank: "Сбербанк",
    services: "Снятие денег",
    commission: "10 рублей",
    balance: 20000
};


for (let i in data) {
    console.log(`${i}: ${data[i]}`);
}

if (data.commission > 1000) {
    console.log(`Будет списана коммисия. ${data.commission}`);
} else {
    console.log(`Не будет списана коммисия. ${data.commission}`);
}