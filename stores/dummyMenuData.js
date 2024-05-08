import Coffee from "/assets/img/cookey/blackCoffee.png";
import milkCoffee from "/assets/img/cookey/milkCoffee.png";
import milkCoffee2 from "/assets/img/cookey/milkCoffee2.png";
import cake from "/assets/img/cookey/cupcake.png";
import cen29 from "/assets/img/cookey/cen29.png";
import pie from "/assets/img/cookey/pie.png";
import pastry from "/assets/img/cookey/pastry.png";
import tart from "/assets/img/cookey/tart.png";
import tart2 from "/assets/img/cookey/tart2.png";
import tart3 from "/assets/img/cookey/tart3.png";
import Cookey from "/assets/img/cookey/biscuit.png";
import Cookey1 from "/assets/img/cookey/blackBiscuit.png";
import Cookey2 from "/assets/img/cookey/redbiscuit.png";
import bun from "/assets/img/cookey//bun.png";
import bun2 from "/assets/img/cookey/biscuit3.png";



const menuData = [

    {
        id: 2,
        name: "Coffee",
        img: Coffee,
        slug: "msp",
        item: [{
                id: 22,
                title: "Espresso",
                image: Coffee,
                price: 14.99,
                description: "Espresso is a concentrated form of coffee brewed with high pressure, hot water and finely  ground coffee beans. Espresso is thicker than regular coffee and has a layer of “crema” on top, which results from air bubbles mixing with the coffee's oils",
                star: "4.5",
            },
            {
                id: 23,
                title: "Americano",
                image: milkCoffee,
                price: 14.99,
                description: "An americano is just water and espresso. It’ll either be served 1/2 and 1/2 or 1/3 espresso to 2/3 water, depending on the coffee shop in question or how you’ve chosen to brew it. Traditionally, there will be no milk but some people may add it depending on their personal preference.",
                star: "4.5",
            },
            {
                id: 24,
                title: "Cappuccino",
                image: milkCoffee2,
                price: 14.99,
                description: "A cappuccino is the perfect balance of espresso, steamed milk and foam. This coffee is all about the structure and the even splitting of all elements into equal thirds. An expertly made cappuccino should be rich, but not acidic and have a mildly sweet flavouring from the milk. ",
                star: "4.5",
            },
            {
                id: 25,
                title: "Latte",
                image: Coffee,
                price: 14.99,
                description: "A latte or caffè latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top.&nbsp;If you don't drink dairy milk, you can easily swap it for a plant-based alternative like soy, oat or coconut milk.",
                star: "4.5",
            },
        ],
    },
    {
        id: 13,
        name: "Cake",
        img: cake,
        slug: "ls",
        item: [{
                id: 63,
                title: "Pastry",
                image: pastry,
                price: 11,
                description: "Served with marinara sauce and ranch dressing",
                star: "4.5",
            },
            {
                id: 64,
                title: "Crem Puff",
                image: cen29,
                price: 11.99,
                description: "",
                star: "4.5",
            },
            {
                id: 65,
                title: "Ceam Filled Pie",
                image: pie,
                price: 11.99,
                description: "",
                star: "4.5",
            },
        ],
    },
    {
        id: 3,
        name: "Cookie",
        img: Cookey,
        slug: "p",
        item: [{
                id: 26,
                title: "Chocolate chip cookie",
                image: Cookey,
                price: 11.99,
                description: "",
                star: "4.5",
            },
            {
                id: 27,
                title: "Orange Filed cookie",
                image: Cookey1,
                price: 11.99,
                description: "",
                star: "4.5",
            },
            {
                id: 28,
                title: "Red velvet cookie",
                image: Cookey2,
                price: 11.99,
                description: "",
                star: "4.5",
            },
        ],
    },
    {
        id: 4,
        name: "Tart",
        img: tart,
        slug: "ss",
        item: [{
                id: 30,
                title: "Chocolate tart",
                image: tart,
                price: 11.99,
                description: "Chocolate cream filled pie",
                star: "4.5",
            },
            {
                id: 31,
                title: "Vanilla Tart",
                image: tart2,
                price: 11.99,
                description: "Vanilla cream filled pie",
                star: "4.5",
            },
            {
                id: 32,
                title: "Orange Tart",
                image: tart3,
                price: 11.99,
                description: "Orange cream filled pie",
                star: "4.5",
            },
        ],
    },
    {
        id: 5,
        name: "Buns",
        img: bun,
        slug: "sl",
        item: [{
                id: 34,
                title: "Sweet Buns",
                image: bun,
                price: 11.99,
                description: "Served with marinara sauce and ranch dressing",
                star: "4.5",
            },
            {
                id: 35,
                title: "Melon Buns",
                image: bun2,
                price: 11.99,
                description: "",
                star: "4.5",
            },
        ],
    },
];

const toppingselling = [{
        id: 22,
        name: "Espresso",
        img: Coffee,
        price: 14.99,
        description: "Espresso is a concentrated form of coffee brewed with high pressure, hot water and finely  ground coffee beans. Espresso is thicker than regular coffee and has a layer of “crema” on top, which results from air bubbles mixing with the coffee's oils",
        star: "4.5",
    },
    {
        id: 23,
        name: "Americano",
        img: milkCoffee,
        price: 14.99,
        description: "An americano is just water and espresso. It’ll either be served 1/2 and 1/2 or 1/3 espresso to 2/3 water, depending on the coffee shop in question or how you’ve chosen to brew it. Traditionally, there will be no milk but some people may add it depending on their personal preference.",
        star: "4.5",
    },
    {
        id: 63,
        name: "Pastry",
        img: pastry,
        price: 11,
        description: "Served with marinara sauce and ranch dressing",
        star: "4.5",
    },
    {
        id: 64,
        name: "Cream Puff",
        img: cen29,
        price: 11.99,
        description: "",
        star: "4.5",
    },
    {
        id: 27,
        name: "Orange Filed cookey",
        img: Cookey1,
        price: 11.99,
        description: "",
        star: "4.5",
    },
    {
        id: 30,
        name: "Chocolate tart",
        img: tart,
        price: 11.99,
        description: "Chocolate cream filled pie",
        star: "4.5",
    },
    {
        id: 31,
        name: "Vanilla Tart",
        img: tart2,
        price: 11.99,
        description: "Vanilla cream filled pie",
        star: "4.5",
    },
    {
        id: 35,
        name: "Melon Buns",
        img: bun2,
        price: 11.99,
        description: "",
        star: "4.5",
    },
];
// Export the arrays
export { menuData, toppingselling };