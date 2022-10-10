import RoutesApp from "./routes";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <RoutesApp/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Hind&display=swap" rel="stylesheet"/>
    </div>
  );
}

export default App;