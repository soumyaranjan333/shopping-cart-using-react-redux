import data from '../data.json'

export let products = {
  products: data.products,
  cartItems:[],
  // cartItems:JSON.parse(localStorage.getItem("cartItems")),
  size: "",
  sort: "",
}
    
    
    
    
    // export let products= [   
    //   {
    //     id: "dress1",
    //     image: "/images/dress1.jpg",
    //     title: "Midi sundress with shirring detail",
    //     description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    //     availableSizes: ["XS","X", "L", "XL", "XXL"],
    //     price: 1290,
    //     sort:''
    //   },
    //   {
    //     id: "dress2",
    //     image: "/images/dress2.jpg",
    //     title: "Midi sundress with ruched front",
    //     description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    //     availableSizes: ["M","X", "M", "L"],
    //     price: 1499,
    //     sort:''
    //   },
    //   {
    //     id: "dress3",
    //     image: "/images/dress3.jpg",
    //     title: "Midi dress in pink ditsy floral",
    //     description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    //     availableSizes: ["XS","L","X", "M", "L"],
    //     price: 1720,
    //     sort:''
    //   },
    //   {
    //     id: "dress4",
    //     image: "/images/dress4.jpg",
    //     title: "cami maxi dress in polka dot",
    //     description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    //     availableSizes: ["XL"],
    //     price: 2599,
    //     sort:''
    //   },
    //   {
    //     id: "dress5",
    //     image: "/images/dress5.jpg",
    //     title: "Frill mini dress in yellow polka dot",
    //     description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    //     availableSizes: ["M","L","X", "L", "XL"],
    //     price: 1090,
    //     sort:''
    //   },
    //   {
    //     id: "dress6",
    //     image: "/images/dress6.jpg",
    //     title: "Midi tea dress in blue and red spot",
    //     description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    //     availableSizes: ["S","XL", "XXL"],
    //     price: 2690,
    //     sort:''
    //   },{
    //     id: "dress7",
    //     image: "/images/dress7.jpg",
    //     title: "cami maxi dress in polka dot",
    //     description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    //     availableSizes: ["S","M","XL"],
    //     price: 2500,
    //     sort:''
    //   },
    //   {
    //     id: "dress8",
    //     image: "/images/dress8.jpg",
    //     title: "Frill mini dress in yellow polka dot",
    //     description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    //     availableSizes: ["M","L","X", "L", "XL"],
    //     price: 1099,
    //     sort:''
    //   },
    //   {
    //     id: "dress9",
    //     image: "/images/dress9.jpg",
    //     title: "Midi tea dress in blue and red spot",
    //     description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    //     availableSizes: ["S","L","XL", "XXL"],
    //     price: 4999,
    //     sort:''
    //   }
    // ]
  