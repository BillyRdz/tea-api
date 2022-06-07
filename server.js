const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

//prettier-ignore
const tea = {
  'oolong': {
    'type': 'black',
    'origin': 'yo mommas house',
    'waterTemp': 200,
    'steepTimeSeconds': 180,
    'caffinated': true,
    'flavor': 'delicious',
  },
  'matcha': {
    'type': 'green',
    'origin': 'yo mommas house',
    'waterTemp': 200,
    'steepTimeSeconds': 180,
    'caffinated': false,
    'flavor': 'delicious',
  },
  'unknown': {
    'type': 'unknown',
    'origin': 'unknown',
    'waterTemp': 0,
    'steepTimeSeconds': 0,
    'caffinated': false,
    'flavor': 'unknown',
  }
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const teaName = req.params.name.toLowerCase();
  if (tea[teaName]) {
    res.json(teaName);
  } else {
    res.json(tea["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Hello from node. The server is running on port ${PORT}`);
});
