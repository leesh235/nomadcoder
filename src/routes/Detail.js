import React from 'react';
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

//9번은 아폴로를위한 쿼리이다. 즉, 아폴로에 알려주기위한 쿼리
//10번부터는 서버를 위한 쿼리이다.
const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export default () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {variables: { id: +id } });
    if (loading) {
        return <div>loading</div>;
    }
    if (data && data.movie) {
        return <div>{data.movie.title}</div>;
    }
};