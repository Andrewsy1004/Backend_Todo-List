import Express from 'express';
import cors from 'cors';
import {dbConnection} from './database/config.js';
import userRoute from './routes/user-route.js';
import 'dotenv/config';

dbConnection();

const app = Express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(Express.json());

app.use('/api/user', userRoute);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
    