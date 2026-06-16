import { postModel } from "@/src/models/post/post-model";

export interface PostRepository {
findAll(): Promise<postModel[]>;

}
