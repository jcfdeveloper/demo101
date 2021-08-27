exports.up = function (knex) {
  return knex.schema.createTable("movies", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer("director_id").unsigned().references("id").inTable("movies");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("movies");
};
