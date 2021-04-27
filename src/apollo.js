import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const cache = new InMemoryCache();
const link = new createHttpLink({
    uri: "http://localhost:4000/",
});

const client = new ApolloClient({
    cache: cache,
    link: link,
    //local state
    resolvers:{
        Movie:{
            isLiked: () => false
        },
        Mutation: {
            toggleLikeMovie: (_, {id}, {cache}) => {
                cache.modify({id:`Movie:${id}`,
                    fields:{
                        isLiked: (isLiked) => !isLiked
                    }
                })
            }
        }
    }
})

export default client;