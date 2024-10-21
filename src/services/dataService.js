const catalog = [
    {
        "title":"Jordans",
        "image":"./img/airjordans.jpg",
        "price":125.99,
        "category":"Basketball",
        "_id":"131298"

    }

    {
        "title":"Bapes",
        "image":"./img/bapes.jpg",
        "price":150.99,
        "category":"Street Fashion",
        "_id":"131298"

    }

    {
        "title":"New Balances",
        "image":"./img/newbalance.jpg",
        "price":174.99,
        "category":"Walking",
        "_id":"131298"

    }
];

class DataService {
    getProducts() {
        return catalog;
    }
}

export default DataService;