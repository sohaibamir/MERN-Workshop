import "./App.css"
import { LanguageProvide } from "./Context/languageContext";
import MainRoutes from "./Routes";

function App() {
  return (
    <LanguageProvide>
      <MainRoutes />
    </LanguageProvide>
  );
}

export default App;
