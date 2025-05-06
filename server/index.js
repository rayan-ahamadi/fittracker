require('module-alias/register');
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config(); // Charger les variables d'environnement


const app = express();

// Configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "*",
    credentials: true,
}));

const PORT = process.env.PORT || 5000;

/* -- Test de l'API -- */
app.get('/', (req, res) => {
    res.send('API is running');
});


/* -- Routes Publiques -- */
app.use('/api/user', require('@entities/user/user.routes'));

/* -- Routes Privées -- */
app.use('/api/protected/user', require('@entities/user/user.protected.routes.js'));



// Gestion des erreurs
app.use((req, res, next) => {
    const error = {
        status: 404,
        message: 'Not found',
    }
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    console.log("ERROR", error);
    res.json({
        error: {
            message: error.message,
            status: error.status,
        },
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);

