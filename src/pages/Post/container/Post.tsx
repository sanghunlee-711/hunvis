import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../state/index";
import { RootState } from "../../../common/interface";
import PostList from "../component/PostList";

const Post: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.post.count);
  const postData = useSelector((state: RootState) => state.post.post);
  const onClickHandler = () => {
    console.log(count);
    dispatch(actions.countApiPost(count));
  };
  useEffect(() => {
    dispatch(actions.sagaApi());
  }, []);

  return (
    <div>
      <span>HEllo Post</span>
      <button onClick={() => onClickHandler()}>Call Post</button>
      <p>{`Count Time: ${count}`}</p>
      <button>Test Saga</button>
      <PostList data={postData} />
    </div>
  );
};

export default Post;
