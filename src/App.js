import logo from './logo.svg';
import './App.css';
import TheHeader from './components/Header/TheHeader';
import TheFooter from './components/Footer/TheFooter';
import Main from './containers/index';

function App() {
  return (
    <div className="App">
      <TheHeader />
      <Main />
      <TheFooter />
    </div>
  );
}

export default App;
