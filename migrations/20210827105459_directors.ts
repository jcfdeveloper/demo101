import Knex from "knex";

export const up = (knex: Knex) => {
  return knex.schema.createTable("directors", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.timestamps(true, true);
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists("directors");
};
