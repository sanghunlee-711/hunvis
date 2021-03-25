import React from "react";
import { DataTypes } from "../../../common/interface";
import styled from "styled-components";

interface PostListPropType {
  data: DataTypes;
}

const PostList: React.FC<PostListPropType> = ({ data }): JSX.Element => {
  return (
    <PostListContainer>
      {data?.map((el) => (
        <CardWrapper>
          <li>{el.date}</li>
          <li>{el.title}</li>
          <li>{el.contents}</li>
        </CardWrapper>
      ))}
    </PostListContainer>
  );
};

const PostListContainer = styled.main`
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const CardWrapper = styled.ul`
  width: 10vw;
  min-width: 250px;
  min-height: 200px;
  border: 1px solid black;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export default PostList;
