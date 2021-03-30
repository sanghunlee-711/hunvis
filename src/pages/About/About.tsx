import React, { useEffect, useState } from "react";
import Comments from "./components/Comments";
import WorkEx from "./components/WorkEx";
import axios from "axios";
import {
  DataTypes,
  APIRootDataType,
  WorkRootState,
} from "../../common/interface";

//아래 데이터 타입으로 다 정의를 해보자 ..

// export type WorkTypes = WorkRootState[];

const About: React.FC = (): JSX.Element => {
  const [workData, setWorkData] = useState<WorkRootState[]>([]);

  useEffect(() => {
    axios
      .get<APIRootDataType>("data/data.json", {})
      .then((res) => setWorkData(res.data["work-data"]));
  }, []);

  return (
    <>
      <Comments />
      <WorkEx workData={workData} />
    </>
  );
};

export default About;
