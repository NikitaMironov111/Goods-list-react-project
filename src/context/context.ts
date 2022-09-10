import { createContext, SetStateAction, Dispatch } from 'react';

const Context = createContext({} as IModalLogin & IAuth & IModalImg);

export default Context;

interface IModalLogin {
  openModalLogin: boolean;
  setOpenModalLogin: Dispatch<SetStateAction<boolean>>;
}

interface IAuth {
  isLoginUser: boolean;
  setIsLoginUser: Dispatch<SetStateAction<boolean>>;
}

interface IModalImg {
  openModalImg: boolean;
  setOpenModalImg:Dispatch<SetStateAction<boolean>>;
}