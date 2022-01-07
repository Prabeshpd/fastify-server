import { HTTPMethods } from "fastify";
import { FastifyRequest, FastifyReply, DoneFuncWithErrOrRes } from "fastify";
import * as store from "@leapfrogtechnology/async-store";

import * as User from "../controllers/users";

const get: HTTPMethods = "GET";
const post: HTTPMethods = "POST";

const routes = [
  {
    method: get,
    url: "/api/users",
    onRequest: store.initializeHooks(),
    preHandler: (
      req: FastifyRequest,
      reply: FastifyReply,
      done: DoneFuncWithErrOrRes
    ) => {
      store.set({ user: "2343" });
      done();
    },
    handler: User.getAll,
  },
  {
    method: post,
    url: "/api/users",
    handler: User.insert,
  },
];

export default routes;
