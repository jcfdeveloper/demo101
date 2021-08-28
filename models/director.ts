import { Model } from "objection";
import { ObjectType, Field } from "decapi";
import { Movie } from "./movie";

@ObjectType()
export class Director extends Model {
  static get tableName() {
    return "directors";
  }

  @Field({ type: Number })
  id: number;

  @Field({ type: String })
  name: string;

  @Field({ type: Date })
  updated_at: Date;

  @Field({ type: Date })
  created_at: Date;

  @Field({ type: [Movie] })
  movies = async () => await Movie.query().where("director_id", this.id);

  static relationshipMapping = {
    movies: {
      relation: Model.HasManyRelation,
      modelClass: () => Movie,
      join: {
        from: "directors.id",
        to: "movies.director_id",
      },
    },
  };
  
}
