import { ToastContainer } from "react-toastify";
import Route from "./router/Router";
import useAuth from "./hook/use-auth";
import Loading from "./components/Loading/Loading";
import HeroSlideShow from "./pages/homepage/HeroSlideShow";

function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) {
    return <Loading />;
  }
  return (
    <>
      <Route />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}

export default App;
