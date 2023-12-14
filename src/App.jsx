import { ToastContainer } from 'react-toastify';
import Route from './router/Router';
import useAuth from './hook/use-auth';
import Loading from './components/Loading/Loading';

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
