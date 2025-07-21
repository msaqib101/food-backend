const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 9000;


app.use(express.json());
app.use(cors());

// Serve static images from /public/images
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.get('/',(req,res)=>{
  res.send("hello")
})
app.get("/api/data", (req, res) => {
  const data = [
    {
            name: "Boilded Egg",
            price: 10,
            text: "A perfectly cooked boiled egg with a soft center and firm whites — packed with protein and perfect for a healthy start to your day.",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 25,
            text: "A steaming bowl of rich broth, tender noodles, and savory toppings — this classic Japanese comfort food delivers bold flavor in every bite.",
            image: "/images/ramen.png",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 45,
            text: "Juicy, smoky, and perfectly seasoned — our grilled chicken is flame-cooked to perfection for a bold, savory bite every time.",
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 18,
            text: "Soft, moist, and layered with rich frosting — this delightful cake is a perfect treat for every sweet craving and celebration.",
            image: "/images/cake.png",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 23,
            text: "A hearty stack of flame-grilled patty, fresh veggies, and melted cheese — ",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 25,
            text: "Fluffy and golden-brown, these pancakes are stacked high and drizzled with syrup",
            image: "/images/pancake.png",
            type: "dinner",
        },
          {
            name: "PIZZA",
            price: 21,
            text: "A crispy crust loaded with melted cheese, savory sauce, and your favorite toppings",
            image: "/images/Pizza.png",
            type: "dinner",
        },
        {
            name: "PASTA",
            price: 18,
            text: "Perfectly cooked pasta tossed in a rich, creamy sauce with herbs and",
            image: "/images/pasta.png",
            type: "lunch",
        },
         {
            name: "PARATHA",
            price: 12,
            text: "A crispy, flaky flatbread cooked to golden perfection — this buttery",
            image: "/images/paratha.png",
            type: "breakfast",
        },
  ];

  res.json(data);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
