const express = require('express');
const app = express();

app.use(express.json());

let userId = 'john_doe_17091999';
let email = 'john@xyz.com';
let rollNumber = 'ABCD123';

app.post('/bfhl', (req, res) => {
  const data = req.body.data;
  const numbers = [];
  const alphabets = [];
  let highestLowercaseAlphabet = '';

  for (const item of data) {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (item.match(/[a-z]/i)) {
      alphabets.push(item);
      if (item.toLowerCase() > highestLowercaseAlphabet) {
        highestLowercaseAlphabet = item.toLowerCase();
      }
    }
  }

  res.json({
    is_success: true,
    user_id: userId,
    email,
    roll_number: rollNumber,
    numbers,
    alphabets,
    highest_lowercase_alphabet: [highestLowercaseAlphabet],
  });
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
