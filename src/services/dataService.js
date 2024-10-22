const catalog = [
    {
        "title":"Jordans",
        "image":"./img/airjordans.jpg",
        "price":125.99,
        "category":"Basketball",
        "_id":"131298"

    }

    ,{
        "title":"Bapes",
        "image":"./img/bapes.jpg",
        "price":150.99,
        "category":"Street Fashion",
        "_id":"131298"

    }

    ,{
        "title":"New Balances",
        "image":"./img/newbalance.jpg",
        "price":174.99,
        "category":"Walking",
        "_id":"131298"

    }

    ,{
        "title":"Sketchers",
        //"image":"./img/newbalance.jpg",
        "price":99.99,
        "category":"Walking/running",
        "_id":"131298"

    }

    ,{
        "title":"Reebok",
        //"image":"./img/reebok.jpg",
        "price":75.99,
        "category":"cross-training",
        "_id":"131298"

    }

    ,{
        "title":"Adidas",
        //"image":"./img/Adidas.jpg",
        "price":120.99,
        "category":"All Around",
        "_id":"131298"

    }

    ,{
        "title":"Yeezy",
        //"image":"./img/Yeezy.jpg",
        "price":30.99,
        "category":"Walking/comfort",
        "_id":"131298"

    }
];

class DataService {
    getProducts() {
        return catalog;
    }

    getCategories() {
        return ['Jordans', 'Bapes', 'New Balances']
    }
}

export default DataService;