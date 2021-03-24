import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "./state/index";

interface IRootState {
  post: string[];
  count: number;
}
interface RootState {
  post: IRootState;
}

const Post: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.post.count);

  const onClickHandler = () => {
    console.log(count);
    dispatch(actions.countApiPost(count));
  };
  const checkSaga = () => {
    dispatch(actions.sagaApi());
  };
  return (
    <div>
      <span>HEllo Post</span>
      <button onClick={() => onClickHandler()}>Call Post</button>
      <p>{`Count Time: ${count}`}</p>
      <button onClick={checkSaga}>Test Saga</button>
    </div>
  );
};

export default Post;
