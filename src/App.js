import './App.css';
import ContactUs from './ContactUs';
import Head from './Head';
import Navbar from './Navbar';
import PopularCategoriesHead from './PopularCategoriesHead';
import Frequent from './Frequent';
import HappyClient from './HappyClient';
import PopularConsultants from './PopularConsultants';
import Growth from './Growth';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <PopularCategoriesHead />
      <PopularConsultants />
      <Growth />
      <Frequent />
      <HappyClient />
      <ContactUs />
    </div>
  );
}

export default App;
