import "./App.css";
import Navbar from "./components/navbar/Navbar";
// import UseState from "./components/useState/UseState";
// import UserStyle from "./components/styles/UserStyle";
// import UseRef from "./components/useRef/UseRef";
// import ForwardRefDemo from "./components/forwardref/ForwardRefDemo";
// import { UserProvider } from "./components/context/UserProvider";
// import Dashboard from "./components/context/Dashboard";
// import UseMemoDemo from "./components/useMemo/UseMemoDemo";
// import UseCallbackDemo from "./components/useCallback/UseCallbackDemo";
// import UseEffectDemo from "./components/useEffect/UseEffectDemo";
// import TaskManager from "./components/useReducer/TaskManager";
// import UsersList from "./components/useCustom/UsersList";
// import UserManagement from "./components/useRedux/UserManagement";
// import UserManagement from "./components/zustand/UserDashboard";
import QueryProvider from "./components/useQuery/providers/QueryProvider";
import UserManagement from "./components/useQuery/components/UserDashboard";

function App() {
  return (
    <QueryProvider>
      <Navbar />

      <main className="app-content">
        {/* <UseState /> */}
        {/* <UserStyle /> */}
        {/* <UseRef /> */}
        {/* <ForwardRefDemo /> */}
        {/* <UserProvider>
          <Dashboard />
        </UserProvider> */}
        {/* <UseMemoDemo /> */}
        {/* <UseCallbackDemo /> */}
        {/* <UseEffectDemo /> */}
        {/* <TaskManager /> */}
        {/* <UsersList /> */}
        <UserManagement />
      </main>
    </QueryProvider>
  );
}

export default App;
