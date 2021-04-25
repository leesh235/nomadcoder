import React from 'react';
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/client';

const GET_MOVIES = gql`
{
    movies {
        id
        medium_cover_image
    }
}
`;

export default () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    return <h1>Home</h1>;
};