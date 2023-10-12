import { FC } from 'react';
import { Outlet } from "react-router-dom";

import Header from "../../../widget/Header/Header";

import {MainLayoutWrapper} from "./MainLayout.styled";

export const MainLayout: FC = () => {
  return (
    <MainLayoutWrapper>
      <Header />
      <Outlet />
    </MainLayoutWrapper>
  );
};