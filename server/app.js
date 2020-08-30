require("dotenv").config();

const express = require("express")
      PORT = process.env.PORT || 5000,
      db = require("./database"),
      cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());


//get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
		// const results = await db.query("select * from restaurants");
		const restaurantRatings  = await db.query("select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id");

        res.status(200).json({
            status: 200,
            results: restaurantRatings.rows.length,
            data: {
            	restaurants: restaurantRatings.rows
            }
        });
        } catch (err) {
        console.error(err.message);
        }
});

//get one restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
		const restaurant = await db.query("select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id WHERE id = $1", [req.params.id] );
		const reviews = await db.query("select * from reviews WHERE restaurant_id = $1", [req.params.id] );

		"select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id WHERE id = $1"

        res.status(200).json({
            status: 200,
            data: {
				restaurant: restaurant.rows[0],
				reviews: reviews.rows
            }
        });
    } catch (err) {
        console.error(err.message);
    }
});

//create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
    try {
        const {name, location, price_range} = req.body;
        const result = await db.query("INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) RETURNING *", [name, location, price_range]);

        res.status(201).json({
            status: "success",
            data: {
                restaurant: result.rows[0]
            }
        })
    } catch (err) {
        console.error(err.message)
    }

});

//update a restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const {name, location, price_range} = req.body;
        const {id} = req.params;

        const result = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",[name, location, price_range, id]);

        res.status(200).json({
            status: "success",
            data: {
                restaurant: result.rows[0]
            }
        })
    } catch (err) {
        console.error(err.message);
    }
  
});

//delete a restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const result = await db.query("DELETE FROM restaurants WHERE id = $1", [id]);
        res.status(204).json({
            status: "success"
        })
    } catch (err) {
        console.error(err.message);
    }
   
});

app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
	try {
		const {id} = req.params;
		const {rating, review, name} = req.body;
		const result = await db.query("INSERT INTO reviews(name, rating, review, restaurant_id) VALUES($1, $2, $3,$4) RETURNING *",[name, rating, review, id]);

		res.status(201).json({
			status: "success",
			data:{
				review: result.rows[0]
			}
		});
	} catch (err) {
		console.error(err.message);
	}
})



app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
});