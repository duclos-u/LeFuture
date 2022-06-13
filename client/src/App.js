import logo from './logo.svg';
import './App.sass';
import {Footer, Navbar, Services, Transactions, Welcome} from './components';

const App = ()  => {
  return (
    <div className="App">
      <Navbar />
      <Services />
        <Welcome />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
