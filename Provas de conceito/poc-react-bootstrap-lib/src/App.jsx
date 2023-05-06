import HeroCarousel from "./heroCarousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ActivityCard from "./activityCard";




function App() {
  

  return (
    <>
      <HeroCarousel />
      <div className="activities">
        <ActivityCard />
      </div>
    </>
  )
}

export default App
