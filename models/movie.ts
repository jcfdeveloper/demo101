import { Model } from "objection";
import { ObjectType, Field } from "decapi";

@ObjectType({ description: "Movie" })
export class Movie extends Model {
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
