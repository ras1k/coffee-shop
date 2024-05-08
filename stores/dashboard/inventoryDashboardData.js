import blackcoffee from '@/assets/img/coffeebag/1.jpg'
const inventoryProductsData = [{
        id: 1,
        title: "Black Coffee",
        brand: "Fresh Veggies",
        price: "30",
        quantity: "100",
        category: "Vegetable",
        unit_type: "type",
        unit_amount: "20",
        minimum_quantity: "15",
        lot_number: "566",
        expiry_date: "5 Sep 2024",
        image: "https://grocery.islamicdigitallane.com/product_img/20240313195705.webp",
        isPosted: true,
    },
    {
        id: 2,
        title: "Arong Dairy Sour Curd",
        brand: "Fresh Veggies",
        price: "30",
        quantity: "100",
        category: "Vegetable",
        unit_type: "type",
        unit_amount: "20",
        minimum_quantity: "15",
        lot_number: "566",
        expiry_date: "5 Sep 2024",
        image: "https://grocery.islamicdigitallane.com/product_img/20240313195900.webp",
        isPosted: true,
    },
    {
        id: 3,
        title: "ACI Savlon Liquid Antiseptic",
        brand: "Fresh Veggies",
        price: "30",
        quantity: "100",
        category: "Antiseptic",
        unit_type: "type",
        unit_amount: "20",
        minimum_quantity: "15",
        lot_number: "566",
        expiry_date: "5 Sep 2024",
        image: "https://grocery.islamicdigitallane.com/product_img/20240313200813.webp",
        isPosted: true,
    },
    {
        id: 4,
        title: "Coffee Creme",
        brand: "ACI",
        price: "30",
        quantity: "100",
        category: "Coffee",
        unit_type: "type",
        unit_amount: "20",
        minimum_quantity: "15",
        lot_number: "566",
        expiry_date: "5 Sep 2024",
        image: blackcoffee,
        isPosted: false,
    },
];

const vendorListData = [{
        name: "FreshCart",
        products: [{
                name: "Apple",
                price: 100,
            },
            {
                name: "Orange",
                price: 200,
            },
            {
                name: "Pineapple",
                price: 300,
            },
        ],
    },
    {
        name: "Organic Oasis",
        products: [{
                name: "Banana",
                price: 150,
            },
            {
                name: "Strawberry",
                price: 250,
            },
            {
                name: "Blueberry",
                price: 300,
            },
        ],
    },
    {
        name: "Farm Fresh Market",
        products: [{
                name: "Carrot",
                price: 80,
            },
            {
                name: "Broccoli",
                price: 120,
            },
            {
                name: "Spinach",
                price: 100,
            },
        ],
    },
    {
        name: "Veggie Village",
        products: [{
                name: "Tomato",
                price: 90,
            },
            {
                name: "Bell Pepper",
                price: 120,
            },
            {
                name: "Cucumber",
                price: 70,
            },
        ],
    },
    {
        name: "Fruit Fiesta",
        products: [{
                name: "Kiwi",
                price: 120,
            },
            {
                name: "Peach",
                price: 150,
            },
            {
                name: "Plum",
                price: 100,
            },
        ],
    },
];

const purchaseProductsListData = [{
    id: 1,
    import_before_date: "12/12/2023",
    vendor_name: "Organic Oasis",
    product_name: "Banana",
    quantity: "12",
    price: "12",
    isApproved: false,
    userImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
}, ];

export { inventoryProductsData, vendorListData, purchaseProductsListData };