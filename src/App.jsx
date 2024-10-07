import CardContainer from './components/CardContainer';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  return (
    <>
      <div className="bg-violet-900 min-h-screen flex flex-col items-center justify-center space-y-8">
        <ProfileCard />
        <h2 className="text-3xl font-semibold text-white">My Projects</h2>
        <CardContainer />
      </div>
    </>
  );
}

export default App;
