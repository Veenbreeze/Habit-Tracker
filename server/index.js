const exprass = require('express');
const app = exprass();  

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('my backend is running successfully ');
});

app.listen(PORT, () => {
    console.log(`my server is running on port ${PORT}`);
});