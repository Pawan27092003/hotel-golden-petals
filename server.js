const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// CONTACT FORM
app.post("/contact", (req, res) => {
  const { name, phone, message } = req.body;

  console.log("New Contact:", name, phone, message);

  res.json({ success: true });
});

// BOOKING
app.post("/booking", (req, res) => {
  const { checkin, checkout, guests } = req.body;

  console.log("Booking:", checkin, checkout, guests);

  res.json({ success: true });
});

app.listen(5000, () => console.log("Server running on port 5000"));
