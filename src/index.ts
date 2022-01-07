import Fastify, { FastifyInstance } from "fastify";
import routes from "./routes/first_routes";
import { fastifyRequestContextPlugin } from "fastify-request-context";

const fastifyServer: FastifyInstance = Fastify({ logger: true });

fastifyServer.register(fastifyRequestContextPlugin);

const start = async () => {
  try {
    await fastifyServer.listen(3000);
  } catch (err) {
    fastifyServer.log.error(err);
    process.exit(1);
  }
};

routes.forEach((route) => fastifyServer.route(route));

start();
