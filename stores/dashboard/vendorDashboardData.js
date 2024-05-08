const vendorProductsData = [
  {
    id: 1,
    vendor_name: "Salam Vendor",
    vendor_email: "salam@gmail.com",
    products: [
      {
        id: 1,
        name: "Lomba Lebu (Long Lemon)",
        brand: "Fresh Veggies",
        category: "Vegetable",
        unit_type: "pcs",
        unit_quantity: "100",
        max_provide_quantity: "1000",
        price: "1500",
        image:
          "https://grocery.islamicdigitallane.com/product_img/20240313195705.webp",

        is_available: true,
      },
      {
        id: 2,
        name: "Arong Dairy Sour Curd",
        brand: "Arong",
        category: "Ice",
        unit_type: "kg",
        unit_quantity: "0.5",
        max_provide_quantity: "100",
        price: "120",
        image:
          "https://grocery.islamicdigitallane.com/product_img/20240313195900.webp",

        is_available: true,
      },
      {
        id: 3,
        name: "ACI Savlon Liquid Antiseptic",
        brand: "Savlon",
        category: "Antiseptic",
        unit_type: "kg",
        unit_quantity: "100",
        max_provide_quantity: "100",
        price: "30",
        image:
          "https://grocery.islamicdigitallane.com/product_img/20240313200813.webp",

        is_available: true,
      },
      {
        id: 4,
        name: "Hexisol Hand Rub",
        brand: "ACI",
        category: "Antiseptic",
        unit_type: "kg",
        unit_quantity: "1",
        max_provide_quantity: "100",
        price: "160",
        image:
          "https://grocery.islamicdigitallane.com/product_img/20240313200923.webp",

        is_available: false,
      },
    ],
  },
  {
    id: 2,
    vendor_name: "S. Alam Vendor",
    vendor_email: "s-alam@gmail.com",
    products: [
      {
        id: 1,
        name: "ACI Savlon Liquid Antiseptic",
        brand: "Savlon",
        category: "Antiseptic",
        unit_type: "kg",
        unit_quantity: "100",
        max_provide_quantity: "100",
        price: "30",
        image:
          "https://grocery.islamicdigitallane.com/product_img/20240313200813.webp",

        is_available: true,
      },
      {
        id: 2,
        name: "Hexisol Hand Rub",
        brand: "ACI",
        category: "Antiseptic",
        unit_type: "kg",
        unit_quantity: "1",
        max_provide_quantity: "100",
        price: "160",
        image:
          "https://grocery.islamicdigitallane.com/product_img/20240313200923.webp",

        is_available: false,
      },
    ],
  },
  {
    id: 3,
    vendor_name: "Rocky Vai",
    vendor_email: "rocky1@gmail.com",
    products: [
      {
        id: 1,
        name: "ACI Savlon Liquid Antiseptic",
        brand: "Savlon",
        category: "Antiseptic",
        unit_type: "kg",
        unit_quantity: "100",
        max_provide_quantity: "100",
        price: "30",
        image:
          "https://grocery.islamicdigitallane.com/product_img/20240313200813.webp",

        is_available: true,
      },
      {
        id: 2,
        name: "Arong Dairy Sour Curd",
        brand: "Arong",
        category: "Ice",
        unit_type: "kg",
        unit_quantity: "0.5",
        max_provide_quantity: "100",
        price: "120",
        image:
          "https://grocery.islamicdigitallane.com/product_img/20240313195900.webp",

        is_available: true,
      },
      {
        id: 3,
        name: "Lomba Lebu (Long Lemon)",
        brand: "Fresh Veggies",
        category: "Vegetable",
        unit_type: "pcs",
        unit_quantity: "100",
        max_provide_quantity: "1000",
        price: "1500",
        image:
          "https://grocery.islamicdigitallane.com/product_img/20240313195705.webp",

        is_available: true,
      },
      {
        id: 4,
        name: "Hexisol Hand Rub",
        brand: "ACI",
        category: "Antiseptic",
        unit_type: "kg",
        unit_quantity: "1",
        max_provide_quantity: "100",
        price: "160",
        image:
          "https://grocery.islamicdigitallane.com/product_img/20240313200923.webp",

        is_available: false,
      },
    ],
  },
];

const vendorListData = [
  {
    name: "FreshCart",
    products: [
      {
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
    products: [
      {
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
    products: [
      {
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
    products: [
      {
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
    products: [
      {
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

const purchaseProductsListData = [
  {
    id: 1,
    import_before_date: "12/12/2023",
    vendor_name: "Organic Oasis",
    product_name: "Banana",
    quantity: "12",
    price: "12",
    isApproved: false,
    userImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
  },
];

export { vendorProductsData, vendorListData, purchaseProductsListData };
