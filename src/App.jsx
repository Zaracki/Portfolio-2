import CardContainer from './components/CardContainer';
import ProfileCard from './components/ProfileCard';
import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/footer';

function App() {
  return (
    <>
      <Header />
      <main className="bg-gray-900 min-h-screen flex flex-col items-center justify-center space-y-8">
        <ProfileCard />
        <h2 className="text-3xl font-semibold text-white">My Projects</h2>
        <CardContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
