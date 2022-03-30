import 'swiper/css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Routes from './config/Routes';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <Routes />
            <Footer />
          </>
        )}
      />
    </Router>
  );
}

export default App;
