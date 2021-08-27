import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
const app = express();
import { compiledSchema } from "./schema/schema";
import knex from "knex";
const { knexSnakeCaseMappers } = require("objection");
import knexfile from "./knexfile";
import { Model } from "objection";

app.use(cors());

Model.knex(knex(knexfile.development));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: compiledSchema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});