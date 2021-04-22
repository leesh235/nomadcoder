import { getMovies, getMovie, getSuggestions } from "./db";

//schema의 가이드 라인에 따라 db에서 받아온 정보를 처리한다.
const resolvers = {
  Query: {
    //_,은 object자리인데 안쓸거라 _,로 처리함
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_,{id}) => getMovie(id),
    suggestions: (_,{id}) => getSuggestions(id)
  }
};

export default resolvers;