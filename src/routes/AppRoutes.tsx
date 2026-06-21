import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../components/home/FeatureCard";
import NotFound from "../components/pagenotfound/NotFound";

import UseState from "../components/useState/UseState";
import UseRef from "../components/useRef/UseRef";
import ForwardRefDemo from "../components/forwardref/ForwardRefDemo";

import { UserProvider } from "../components/context/UserProvider";
import Dashboard from "../components/context/Dashboard";

import UseMemoDemo from "../components/useMemo/UseMemoDemo";
import UseCallbackDemo from "../components/useCallback/UseCallbackDemo";
import UseEffectDemo from "../components/useEffect/UseEffectDemo";
import TaskManager from "../components/useReducer/TaskManager";
import UsersList from "../components/useCustom/UsersList";

import ReduxUserManagement from "../components/useRedux/UserManagement";

import ZustandDashboard from "../components/zustand/UserDashboard";

import QueryProvider from "../components/useQuery/providers/QueryProvider";
import QueryDashboard from "../components/useQuery/components/UserDashboard";
import UserPage from "../components/loader/UserPage";
import { usersLoader } from "../components/loader/useApiLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    errorElement: <NotFound />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "use-state",
        element: <UseState />,
      },

      {
        path: "use-ref",
        element: <UseRef />,
      },

      {
        path: "forward-ref",
        element: <ForwardRefDemo />,
      },

      {
        path: "context-api",
        element: (
          <UserProvider>
            <Dashboard />
          </UserProvider>
        ),
      },

      {
        path: "use-memo",
        element: <UseMemoDemo />,
      },

      {
        path: "use-callback",
        element: <UseCallbackDemo />,
      },

      {
        path: "use-effect",
        element: <UseEffectDemo />,
      },

      {
        path: "use-reducer",
        element: <TaskManager />,
      },

      {
        path: "custom-hook",
        element: <UsersList />,
      },

      {
        path: "redux-toolkit",
        element: <ReduxUserManagement />,
      },

      {
        path: "zustand",
        element: <ZustandDashboard />,
      },

      {
        path: "tanstack-query",
        element: (
          <QueryProvider>
            <QueryDashboard />
          </QueryProvider>
        ),
      },
      {
        path: "loaders",
        loader: usersLoader,
        element: <UserPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
