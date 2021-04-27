import React from 'react';
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

//10번은 아폴로를위한 쿼리이다. 즉, 아폴로에 알려주기위한 쿼리
//11번부터는 서버를 위한 쿼리이다.
const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      rating
      title
      language
      medium_cover_image
      description_intro
      isLiked @client
    }
    suggestions(id:$id) {
        id
        medium_cover_image
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 20px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;

export default () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {variables: { id: +id } });
    return (
        <Container>
            <Column>
                <Title>{loading ? "Loading..." : `${data.movie.title} ${data.movie.isLiked ? "Good" : ""}`} </Title>
                <Subtitle>{data?.movie?.language} · {data?.movie?.rating}</Subtitle>
                <Description>{data?.movie?.description_intro}</Description>
            </Column>
            <Poster bg={data?.movie?.medium_cover_image}></Poster>
        </Container>
      );
};