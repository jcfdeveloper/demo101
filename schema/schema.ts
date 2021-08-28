import { SchemaRoot, Mutation, compileSchema, Arg, Query } from "decapi";
import { Director } from "../models/director";
import { Movie } from "../models/movie";

@SchemaRoot()
class Schema {
  @Query({ castTo: [Movie] })
  async movies() {
    const movies = await Movie.query();
    return movies;
  }

  @Query({ castTo: [Director] })
  async directors() {
    const directors = await Director.query();
    return directors;
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

export const schema = compileSchema(Schema);
