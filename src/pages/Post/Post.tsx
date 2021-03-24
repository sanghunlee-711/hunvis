import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "./state/index";
import { RootState } from "../../common/interface";

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
      <div>
        {postData?.map((el) => (
          <ul>
            <li>{el.data}</li>
            <li>{el.title}</li>
            <li>{el.contents}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Post;
