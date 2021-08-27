import Knex from "knex";

export const up = (knex: Knex) => {
  return knex.schema.createTable("movies", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer("director_id").unsigned().references("id").inTable("movies");
    table.timestamps(true, true);
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists("movies");
};
