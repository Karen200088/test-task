import {FC, lazy, Suspense} from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {RoutesEnum} from "../shared/config/types";
import {Loading} from "../shared/ui/Loading";

import {MainLayout} from "./layouts/MainLayout";

const WeatherPage = lazy(() => import("../pages/WeatherPage/WeatherPage"));

const appRouter = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        path: RoutesEnum.HOME,
        element: <WeatherPage />,
      },
    ],
  },
  {
    path: '*',
    element: <div>404</div>,
  }
]);

const Router: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={appRouter}/>
    </Suspense>
  );
};

export default Router;
