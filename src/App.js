import './App.css';
import Navbar from './Navbar';
import Head from './Head';
import Growth from './Growth';
import PopularCategoriesHead from './PopularCategoriesHead';
import PopularConsultants from './PopularConsultants';
import Frequent from './Frequent';
import HappyClient from './HappyClient';
import ContactUs from './ContactUs';

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
