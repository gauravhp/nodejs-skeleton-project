const mongoose = require("mongoose");
const config = require("../config");
const { User } = require("./models");

const seedData = async () => {
  try {
    await mongoose.connect(
      `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    await User.deleteMany({});

    const users = [
      {
        username: "john_doe",
        email: "john@example.com",
        password: "password123",
      },
      {
        username: "jane_smith",
        email: "jane@example.com",
        password: "password456",
      },
    ];

    await User.insertMany(users);

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedData();
