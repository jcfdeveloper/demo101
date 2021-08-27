import Knex from "knex";

export const seed = async (knex: Knex) => {
  // Deletes ALL existing entries
  await knex.raw("TRUNCATE TABLE movies");
  await knex.raw("TRUNCATE TABLE directors");

  await knex("directors").insert([
    { name: "Zemekis" },
    { name: "Spilberg" },
    { name: "Dan Harmon" },
  ]);

  await knex("movies").insert([
    { director_id: "1", name: "Back to the Future" },
    { director_id: "2", name: "Jurasic Park" },
    { director_id: "3", name: "Rick and Morty" },
  ]);
};
