import "./App.css"
import { LanguageProvide } from "./Context/languageContext";
import MainRoutes from "./Routes";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <LanguageProvide>
      <MainRoutes />
    </LanguageProvide>
  );
}

export default App;
