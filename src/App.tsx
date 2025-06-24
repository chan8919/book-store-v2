import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Detail from "./pages/Detail";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { BookStoreThemeProvider } from "./context/themeContext";

function App() {
  //const [themeName, setThemeName] = useState<ThemeName>("light");
  return (
    <>
      <BookStoreThemeProvider>
        <ThemeSwitcher />
        <Layout>
          <Home />
        </Layout>
      </BookStoreThemeProvider>
    </>
  );
}

export default App;
