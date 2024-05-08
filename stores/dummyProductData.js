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

import img1 from "@/assets/img/coffeebag/1.jpg";
import img2 from "@/assets/img/coffeebag/2.jpg";
import img3 from "@/assets/img/coffeebag/3.webp";
import img4 from "@/assets/img/coffeebag/4.jpeg";
import img5 from "@/assets/img/coffeebag/5.jpg";
import img6 from "@/assets/img/coffeebag/6.avif";
import img7 from "@/assets/img/coffeebag/7.jpg";
import img8 from "@/assets/img/coffeebag/8.jpg";
import img9 from "@/assets/img/coffeebag/9.jpg";
import img10 from "@/assets/img/coffeebag/arabiandark.png";
import img11 from "@/assets/img/coffeebag/arabianexpresso.png";
import img12 from "@/assets/img/coffeebag/qishr.png";
import img13 from "@/assets/img/coffeebag/saudiblend.png";
import img14 from "@/assets/img/coffeebag/affogato.png";
import img15 from "@/assets/img/coffeebag/americano.png";
import img16 from "@/assets/img/coffeebag/frappe.png";
import img17 from "@/assets/img/coffeebag/latte.png";
import img18 from "@/assets/img/coffeebag/frappuccino.png";
import img19 from "@/assets/img/coffeebag/robusta.png";

const menuData = [{
        id: 2,
        name: "CoffeeX Arabica",
        img: img1,
        slug: "msp",
        item: [{
                id: 22,
                name: "Arabian Espresso",
                img: img11,
                price: 14.99,
                description: "Espresso is a concentrated form of coffee brewed with high pressure, hot water and finely  ground coffee beans. Espresso is thicker than regular coffee and has a layer of “crema” on top, which results from air bubbles mixing with the coffee's oils",
                star: "4.5",
            },
            {
                id: 23,
                name: "Saudi Blend",
                img: img13,
                price: 14.99,
                description: "An americano is just water and espresso. It’ll either be served 1/2 and 1/2 or 1/3 espresso to 2/3 water, depending on the coffee shop in question or how you’ve chosen to brew it. Traditionally, there will be no milk but some people may add it depending on their personal preference.",
                star: "4.5",
            },
            {
                id: 24,
                name: "Qishr/Husks Roasted Beans",
                img: img12,
                price: 14.99,
                description: "A cappuccino is the perfect balance of espresso, steamed milk and foam. This coffee is all about the structure and the even splitting of all elements into equal thirds. An expertly made cappuccino should be rich, but not acidic and have a mildly sweet flavouring from the milk. ",
                star: "4.5",
            },
            {
                id: 25,
                name: "Arabian Dark Beans",
                img: img10,
                price: 14.99,
                description: "A latte or caffè latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top.&nbsp;If you don't drink dairy milk, you can easily swap it for a plant-based alternative like soy, oat or coconut milk.",
                star: "4.5",
            },
        ],
    },
    {
        id: 13,
        name: "CoffeeX America",
        img: img5,
        slug: "ls",
        item: [{
                id: 4,
                name: "Americano - 9 LB",
                price: 24.99,
                description: "Get a discount on any merchandise purchase.",
                points: 1000,
                img: img15,
            },
            {
                id: 5,
                name: "Affogato - 10 LB",
                price: 14.99,
                description: "Get a discount on any merchandise purchase.",
                points: 1000,
                img: img14,
            },
            {
                id: 6,
                name: "Caffè Latte - 10 LB",
                price: 12.99,
                description: "Get a discount on any merchandise purchase.",
                points: 1000,
                img: img17,
            },
            {
                id: 7,
                name: "Frappé - 10 LB",
                price: 14.99,
                description: "Get a discount on any merchandise purchase.",
                points: 1000,
                img: img16,
            },
            {
                id: 6,
                name: "Frappuccino - 10 LB",
                price: 24.99,
                description: "Get a discount on any merchandise purchase.",
                points: 1000,
                img: img18,
            },
            {
                id: 7,
                name: "Robusta (Dark Roast)- 10 LB",
                price: 14.99,
                description: "Get a discount on any merchandise purchase.",
                points: 1000,
                img: img19,
            },
        ],
    },
    {
        id: 3,
        name: "CoffeeX Asia",
        img: img9,
        slug: "p",
        item: [{
                id: 7,
                name: "Korean Dalgona Coffee - 10 LB",
                price: 14.99,
                description: "Get a discount on any merchandise purchase.",
                points: 1000,
                img: img7,
            },
            {
                id: 8,
                name: "Sri Lankan Milk Coffee - 10 LB",
                price: 18.99,
                description: "Get a discount on any merchandise purchase.",
                points: 1000,
                img: img8,
            },
            {
                id: 9,
                name: "Indonesian Kopi Luwak - 10 LB",
                price: 15.99,
                description: "Get a discount on any merchandise purchase.",
                points: 1000,
                img: img9,
            },
            {
                id: 4,
                name: "Thai Iced Coffee - 9 LB",
                price: 14.99,
                description: "Get a discount on any merchandise purchase.",
                points: 1000,
                img: img4,
            },
        ],
    },
    {
        id: 4,
        name: "CoffeeX Europa",
        img: img4,
        slug: "ss",
        item: [{
                id: 4,
                name: "Leche y Leche (Spanish) - 9 LB",
                price: 12.99,
                description: "Get a discount on any merchandise purchase.",
                points: 1000,
                img: img4,
            },
            {
                id: 5,
                name: "Kleiner Schwarzer - 10 LB",
                price: 11.99,
                description: "Get a discount on any merchandise purchase.",
                points: 1000,
                img: img5,
            },
            {
                id: 6,
                name: "Café Crema - 10 LB",
                price: 19.99,
                description: "Get a discount on any merchandise purchase.",
                points: 1000,
                img: img6,
            },
            {
                id: 6,
                name: "Zapekanka (Russian) - 10 LB",
                price: 16.99,
                description: "Get a discount on any merchandise purchase.",
                points: 1000,
                img: img2,
            },
            {
                id: 1,
                name: "Café au Lait - 10 LB",
                price: 22.99,
                description: "Redeem this reward for a free coffee of your choice.",
                points: 500,
                img: img1,
            },
        ],
    },
    {
        id: 5,
        name: "CoffeeX Africa",
        img: img7,
        slug: "sl",
        item: [{
                id: 1,
                name: "Ethiopian Yirgacheffe - 10 LB",
                price: 15.99,
                description: "Redeem this reward for a free coffee of your choice.",
                points: 500,
                img: img1,
            },
            {
                id: 2,
                name: "Kenyan AA - 10 LB",
                price: 5.99,
                description: "Get a discount on any merchandise purchase.",
                points: 700,
                img: img2,
            },
            // {
            //     id: 3,
            //     name: "Tanzanian Peaberry - 7 LB",
            //     description: "Get a discount on any merchandise purchase.",
            //     points: 600,
            //     img: img3,
            // },
            {
                id: 6,
                name: "Robusta Kiandu - 10 LB",
                price: 4.99,
                description: "Get a discount on any merchandise purchase.",
                points: 1000,
                img: img6,
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