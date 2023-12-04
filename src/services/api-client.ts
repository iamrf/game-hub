import axios from "axios";

export default axios.create({
    baseURL: "https://opencritic-api.p.rapidapi.com",
    headers: {
        "X-RapidAPI-Key": "6a65036a05msh50fc2ca7c3c0847p1176c0jsn97c19bfc3360",
        "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
    },
});
