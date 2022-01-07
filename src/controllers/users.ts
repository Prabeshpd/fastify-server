import { FastifyRequest, FastifyReply } from "fastify";
//import { requestContext } from "fastify-request-context";
import * as store from "@leapfrogtechnology/async-store";

import boom from "boom";

import User from "../models/users";

export async function getAll(req: FastifyRequest, reply: FastifyReply) {
  try {
    console.log("from Here========= as controller");
    const asdf = store.get("user");
    console.log({ asdf });
    const users = await User.getAll();
    return users;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) throw boom.boomify(error);
    throw new Error("Uncaught exceptions");
  }
}

export async function insert(req: FastifyRequest, reply: FastifyReply) {
  try {
    const data = req.body;
    const user = await User.insertData(data);
    return user;
  } catch (error) {
    if (error instanceof Error) throw boom.boomify(error);
    throw new Error("Uncaught exceptions");
  }
}
