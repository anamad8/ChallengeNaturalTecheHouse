import { server } from './src/server.js';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT_SERVER || 5000;

server.listen(port, () => {
    
    console.log(`Corriendo por el PORT ${port}`); 
});
