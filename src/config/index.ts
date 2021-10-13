process.env.NODE_ENV = process.env.NODE_ENV || "development";

const { PORT } = process.env;
if (!PORT) throw new Error("no env, set env pls");

export default {
  PORT,
};
