import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var data;

const recipeJSON = `[
  {
    "id": "0001",
    "type": "taco",
    "name": "Taco de Pollo",
    "price": 2.99,
    "ingredients": {
      "protein": {
        "name": "Pollo",
        "preparation": "A la parrilla"
      },
      "salsa": {
        "name": "Salsa de Tomate",
        "spiciness": "🔥🔥🔥"
      },
      "toppings": [
        {
          "name": "Lechuga",
          "quantity": "1 taza",
          "ingredients": ["Lechuga Iceberg"]
        },
        {
          "name": "Queso",
          "quantity": "1/2 taza",
          "ingredients": ["Queso Cheddar", "Queso Monterey Jack"]
        },
        {
          "name": "Guacamole",
          "quantity": "2 cucharadas",
          "ingredients": ["Aguacate", "Jugo de Limón", "Sal", "Cebolla", "Cilantro"]
        },
        {
          "name": "Crema Agria",
          "quantity": "2 cucharadas",
          "ingredients": ["Crema Agria"]
        }
      ]
    }
  },
  {
    "id": "0002",
    "type": "taco",
    "name": "Taco de Res",
    "price": 3.49,
    "ingredients": {
      "protein": {
        "name": "Res",
        "preparation": "Adobada y a la parrilla"
      },
      "salsa": {
        "name": "Salsa Verde",
        "spiciness": "🔥🔥🔥🔥🔥🔥"
      },
      "toppings": [
        {
          "name": "Cebolla",
          "quantity": "1/4 taza",
          "ingredients": ["Cebolla Blanca", "Cebolla Roja"]
        },
        {
          "name": "Cilantro",
          "quantity": "2 cucharadas",
          "ingredients": ["Cilantro Fresco"]
        },
        {
          "name": "Queso Fresco",
          "quantity": "1/4 taza",
          "ingredients": ["Queso Fresco"]
        }
      ]
    }
  },
  {
    "id": "0003",
    "type": "taco",
    "name": "Taco de Pescado",
    "price": 4.99,
    "ingredients": {
      "protein": {
        "name": "Pescado",
        "preparation": "Rebozado y Frito"
      },
      "salsa": {
        "name": "Mayonesa Chipotle",
        "spiciness": "🔥"
      },
      "toppings": [
        {
          "name": "Ensalada de Col",
          "quantity": "1 taza",
          "ingredients": [
            "Col Rallada",
            "Zanahoria",
            "Mayonesa",
            "Jugo de Limón",
            "Sal"
          ]
        },
        {
          "name": "Pico de Gallo",
          "quantity": "1/2 taza",
          "ingredients": ["Tomate", "Cebolla", "Cilantro", "Jugo de Limón", "Sal"]
        },
        {
          "name": "Crema de Limón",
          "quantity": "2 cucharadas",
          "ingredients": ["Crema Agria", "Jugo de Limón", "Sal"]
        }
      ]
    }
  }
]`;  

app.get("/", (req, res) => {
  res.render("index.ejs", { recipe: data });
});

app.post("/recipe", (req, res) => {

  switch (req.body.choice) {
    case "chicken":
      data = JSON.parse(recipeJSON)[0];
      break;
    case "beef":
      data = JSON.parse(recipeJSON)[1];
      break;
    case "fish":
      data = JSON.parse(recipeJSON)[2];
      break;
  }

  console.log(data);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
