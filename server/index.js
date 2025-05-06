require('module-alias/register');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

/* -- Test de l'API -- */
app.get('/', (req, res) => {
    res.send('API is running');
});


/* -- Routes Publiques -- */
app.use('/api/user', require('@entities/user/user.routes'));

/* -- Routes Privées -- */
app.use('/api/protected/user', require('@entities/user/user.protected.routes'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);