export interface IRootState {
  post: DataTypes;
  count: number;
}
export interface NavRootState {
  modal: boolean;
  loginData: { id: string; pw: string };
}

export interface RootState {
  post: IRootState;
  nav: NavRootState;
}

export interface DataType {
  date: string;
  title: string;
  contents: string;
}
export type DataTypes = DataType[];

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

//nav
export interface NavActionType {
  LOGIN_MODAL: string;
  POST_LOGIN: string;
  GET_ID: string;
  GET_PW: string;
}

export interface NavActionsType {
  type: string;
  modal: boolean;
  id: string;
  pw: string;
}

export interface NavRootInterface {}
