import { SchemaRoot, Mutation, compileSchema, Arg, Query } from "decapi";
import { Movie } from "../models/movie";

@SchemaRoot()
class Schema {
  @Query({ castTo: [Movie] })
  async find() {
    const movies = await Movie.query();
    return movies;
  }

  @Mutation({ type: Movie })
  async createMovie(
    @Arg({ type: String }) name: string,
    @Arg({ type: Number }) director_id: number
  ) {
    const movie = await Movie.query().insert({
      name: name,
      director_id: director_id,
    });
    return movie;
  }
}

export const compiledSchema = compileSchema(Schema);
