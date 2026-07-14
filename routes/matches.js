const express = require("express");
const axios = require("axios");

const router = express.Router();

const BASE_URL = "https://api.the-odds-api.com/v4";
const API_KEY = process.env.ODDS_API_KEY;

/*
-----------------------------------------
Available Sports
-----------------------------------------
*/

router.get("/sports", async (req, res) => {

    try {

        const response = await axios.get(
            `${BASE_URL}/sports`,
            {
                params: {
                    apiKey: API_KEY
                }
            }
        );

        res.json(response.data);

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.response?.data || err.message
        });

    }

});

/*
-----------------------------------------
Upcoming Matches
-----------------------------------------
*/

router.get("/upcoming", async (req, res) => {

    try {

        const response = await axios.get(
            `${BASE_URL}/sports/upcoming/odds`,
            {
                params: {
                    apiKey: API_KEY,
                    regions: "eu",
                    markets: "h2h",
                    oddsFormat: "decimal"
                }
            }
        );

        res.json(response.data);

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.response?.data || err.message
        });

    }

});

/*
-----------------------------------------
Live Soccer Odds
-----------------------------------------
*/

router.get("/live", async (req, res) => {

    try {

        const response = await axios.get(
            `${BASE_URL}/sports/soccer_epl/odds`,
            {
                params: {
                    apiKey: API_KEY,
                    regions: "eu",
                    markets: "h2h",
                    oddsFormat: "decimal"
                }
            }
        );

        res.json(response.data);

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.response?.data || err.message
        });

    }

});

/*
-----------------------------------------
Odds by Sport
-----------------------------------------
*/

router.get("/odds/:sport", async (req, res) => {

    try {

        const response = await axios.get(
            `${BASE_URL}/sports/${req.params.sport}/odds`,
            {
                params: {
                    apiKey: API_KEY,
                    regions: "eu",
                    markets: "h2h",
                    oddsFormat: "decimal"
                }
            }
        );

        res.json(response.data);

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.response?.data || err.message
        });

    }

});

/*
-----------------------------------------
Event Odds
-----------------------------------------
*/

router.get("/event/:eventId", async (req, res) => {

    try {

        const response = await axios.get(
            `${BASE_URL}/sports/soccer_epl/events/${req.params.eventId}/odds`,
            {
                params: {
                    apiKey: API_KEY,
                    regions: "eu",
                    markets: "h2h"
                }
            }
        );

        res.json(response.data);

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.response?.data || err.message
        });

    }

});

module.exports = router;
