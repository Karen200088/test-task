import { FC } from "react";

import {Spinner, LoaderWrapper} from "./Loading.styled";

export const Loading: FC = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};