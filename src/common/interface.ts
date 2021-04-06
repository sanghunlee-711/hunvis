export interface IRootState {
  post: DataTypes;
  count: number;
}

export interface NavRootState {
  modal: boolean;
  loginData: { id: string; pw: string };
  aboutScroll: number;
  url: string;
}

export interface AboutRootState {
  carouselState: number;
}

export interface RootState {
  post: IRootState;
  nav: NavRootState;
  about: AboutRootState;
}

export interface DataType {
  date: string;
  title: string;
  contents: string;
}
export type DataTypes = DataType[];

export interface WorkRootState {
  position: string;
  period: string[];
  title: string;
  work: string[];
  corp: { name: string; description: string };
}

export interface APIRootDataType {
  "work-data": WorkRootState[];
  "post-data": DataType[];
}

//action type
export interface ActionType {
  CALL_API: string;
  COUNT_API: string;
  SAGA_API: string;
  SUCESS_API: string;
}

export interface ActionsType {
  type: string;
  count: number;
  data: DataTypes;
}

export interface SagaType {
  type: string;
  data: DataTypes;
}

//nav store type
export interface NavActionType {
  LOGIN_MODAL: string;
  POST_LOGIN: string;
  GET_ID: string;
  GET_PW: string;
  ABOUT_SCROLL: string;
  SET_URL: "nav/SET_URL";
}

export interface NavActionsType {
  type: string;
  modal: boolean;
  id: string;
  pw: string;
  aboutScroll: number;
  url: string;
}

export interface NavRootInterface {}
