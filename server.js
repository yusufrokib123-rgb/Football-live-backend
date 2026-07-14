require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/matches", require("./routes/matches"));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Football Live Hub Backend Running"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
