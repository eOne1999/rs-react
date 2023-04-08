/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { RespFromGet, RespPhotosSearch } from '../types';
import server from './server';

const handler = (endpoint: string, body: RespFromGet<RespPhotosSearch>) => {
  server.use(rest.get(endpoint, (req, res, ctx) => res(ctx.status(200), ctx.json(body))));
};

export default handler;
