import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Faq from './components/faq/Faq';
import Question from './components/question/Question';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div >
       <div>
    <Header />
      <main>
        <Faq/>
        <Question/>
        <Contact/>
      </main>
     <Footer />
    </div>
    </div>
  );
}

export default App;
