import {
  ObjectType,
  SchemaRoot,
  Field,
  Mutation,
  compileSchema,
  Arg,
  Query,
} from "decapi";
import { Model } from "objection";

@ObjectType({ description: "Movie" })
class Movie extends Model {
  static get tableName() {
    return "movies";
  }
  @Field({ type: Number })
  id: number;

  @Field({ type: String })
  name: string;

  @Field({ type: Number })
  director_id: number;

  @Field({ type: Date })
  updated_at: Date;

  @Field({ type: Date })
  created_at: Date;
}

@SchemaRoot()
class Schema {
  @Query({ castTo: [Movie] })
  async find() {
    const movies = await Movie.query();
    console.log(movies);
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
