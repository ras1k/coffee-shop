const marketingOfferData = [
  {
    id: 1,
    offer_title: "Ramadan offer",
    highest_cashback: "1300",
    offer_discount: "15%",
    offer_description: "Ramadan offer description",
    valid_till: "20th April, 2024",
    isApproved: false,
  },
  {
    id: 2,
    offer_title: "Eid offer",
    highest_cashback: "1500",
    offer_discount: "18%",
    offer_description: "Eid offer description",
    valid_till: "20th April, 2024",
    isApproved: true,
  },
];

const marketingPromoData = [
  {
    id: 1,
    promo_title: "Ramadan offer",
    promo_code: "ikej89",
    promo_discount: "15%",
    image:
      "https://grocery.islamicdigitallane.com/product_img/20240313195705.webp",
    promo_description: "Eid promo description",
    isApproved: false,
  },
  {
    id: 2,
    promo_title: "Eid offer",
    promo_code: "785afha",
    promo_discount: "18%",
    image:
      "https://grocery.islamicdigitallane.com/product_img/20240313195900.webp",
    promo_description: "Ramada promo description",
    isApproved: true,
  },
];

export { marketingOfferData, marketingPromoData };
