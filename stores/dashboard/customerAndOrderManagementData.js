const orderListsData = [
  {
    id: 1,
    userImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    userName: "Vera Carpenter",
    orderId: "IS987346",
    orderStatus: "Pending",
    branch: "Dhaka",
    totalAmount: "$9823",
    orderedProducts: [
      {
        productId: "IS987346",
        feedback: "",
        feedbackStatus: "",
      },
      {
        productId: "IS987857",
        feedback: "This product is awesome",
        feedbackStatus: "",
      },
    ],
  },
  {
    id: 2,
    userImg:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    userName: "Blake Bowman",
    orderId: "IS987346",
    orderStatus: "Processing",
    branch: "Chattogram",
    totalAmount: "$7235",
    orderedProducts: [
      {
        productId: "IS987346",
        feedback: "This product is not good",
        feedbackStatus: "",
      },
      {
        productId: "IS987857",
        feedback: "This product is awesome",
        feedbackStatus: "Hide",
      },
    ],
  },
  {
    id: 3,
    userImg:
      "https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    userName: "Dana Moore",
    orderId: "IS987346",
    orderStatus: "On the way",
    branch: "Dhaka",
    totalAmount: "$9823",
    orderedProducts: [
      {
        productId: "IS987346",
        feedback: "",
        feedbackStatus: "",
      },
      {
        productId: "IS987857",
        feedback: "This product is very good",
        feedbackStatus: "Approved",
      },
    ],
  },
  {
    id: 4,
    userImg:
      "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
    userName: "Alonzo Cox",
    orderId: "IS987346",
    orderStatus: "Delivered",
    branch: "Dhaka",
    totalAmount: "$8231",
    orderedProducts: [
      {
        productId: "IS987346",
        feedback: "Excellent product",
        feedbackStatus: "",
      },
      {
        productId: "IS987857",
        feedback: "",
        feedbackStatus: "",
      },
    ],
  },
];

const customerListsData = [
  {
    id: 1,
    userImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    userName: "Vera Carpenter",
    customerId: "IS987346",
    totalPurchase: "$89237",
    purchaseTime: "3",
    isVerified: true,
  },
  {
    id: 2,
    userImg:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    userName: "Blake Bowman",
    customerId: "IS987346",
    totalPurchase: "$89237",
    purchaseTime: "3",
    isVerified: false,
  },
  {
    id: 3,
    userImg:
      "https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    userName: "Dana Moore",
    customerId: "IS987346",
    totalPurchase: "$89237",
    purchaseTime: "3",
    isVerified: false,
  },
  {
    id: 4,
    userImg:
      "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
    userName: "Alonzo Cox",
    customerId: "IS987346",
    totalPurchase: "$89237",
    purchaseTime: "3",
    isVerified: true,
  },
];

export { orderListsData, customerListsData };
