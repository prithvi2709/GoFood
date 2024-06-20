const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const url = process.env.MONGODB_URL;
    await mongoose.connect(url, { useNewUrlParser: true });
    console.log("MongoDB connected");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection("food_category");
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.food_category = catData;

    // console.log("Food Items:", global.food_items);
    // console.log("Food Categories:", global.food_category);

  } catch (err) {
    console.error("---", err);
  }
};

module.exports = connectDB;





    // mongoose.set('strictQuery',true);

    // mongoose.connect(url,{useNewUrlParser : true})
    //     .then(()=> console.log('MongoDB connected'))
    //     // .then(()=> { const fetched_data = mongoose.connection.db.collection(""))
    //     .catch((err)=> console.log("---",err));