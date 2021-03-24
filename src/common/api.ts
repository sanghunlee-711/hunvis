//해당 함수는 이행됨 상태가 되는 프로미스 객체를 1초후에 반환한다.
// export function callApiLike() {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000);
//   });
// }

export function callApiLike<T>(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 < 5) {
        resolve();
      } else {
        reject("callApiLike Fail");
      }
    }, 1000);
  });
}

export const callApi = () => {
  fetch("/data/data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => console.log(res));
};
