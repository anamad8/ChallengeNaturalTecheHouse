import express from 'express';
import cors from 'cors';
import { router } from '../src/routers/api.js';

const server = express();

server.use(cors());
server.use('/v0', router);

export { server };