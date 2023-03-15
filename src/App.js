import RoutesComp from "./routes";
import ThemeProvider from "./routes/layouts/components/ThemeContext";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store} >
      <ThemeProvider>
        <RoutesComp />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
