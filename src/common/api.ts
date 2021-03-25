import { DataTypes } from "../common/interface";

//해당 함수는 이행됨 상태가 되는 프로미스 객체를 1초후에 반환한다.
// export function callApiLike() {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000);
//   });
// }

// export function callApiLike<T>(): Promise<void> {
//   return new Promise<void>((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() * 10 < 5) {
//         resolve();
//       } else {
//         reject("callApiLike Fail");
//       }
//     }, 1000);
//   });
// }

//store에 데이터 저장해야햐는드ㅔ
//커지면 변수 받아서 data[sth]에 넣어주자
export const callApi = async () => {
  try {
    const res = await fetch("/data/data.json");
    const data = await res.json();
    const postData = await data["post-data"];
    return postData as DataTypes;
  } catch (err) {
    console.log(err);
  }
};
