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
import UsersList from "./components/useCustom/UsersList";

function App() {
  return (
    <>
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
        <UsersList />
      </main>
    </>
  );
}

export default App;
