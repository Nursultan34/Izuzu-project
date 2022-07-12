import '../css/App.css'
import Header from './components/header/Header';
import MainBlock from './components/main/MainBlock';
import NewMenu from './components/NewMenu/NewMenu';
import CarSection from './components/carSection/CarSection';
import SecondMain from './components/SecondMain/SecondMain';
import ThirdMain from './components/Thirdmain/ThirdMain';
import Third from './components/Thirdmain/Third';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <MainBlock/>
     <NewMenu/>
     <CarSection/>
     <SecondMain/>
     <ThirdMain/>
     <Third/>
     <Footer/>
    </div>
  );
}

export default App;
