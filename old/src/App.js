import UserContextProvider from "./context/UserContextProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <UserContextProvider>
      <AppRouter />
    </UserContextProvider>
  );
}

export default App;
