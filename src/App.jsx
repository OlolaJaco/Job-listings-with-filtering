
import jobData from '../data.js'
import './App.css'
import Filter from './components/Filter.jsx'
import Header from './components/Header.jsx'
import JobList from './components/JobList.jsx'

function App() {


  return (
    <div className="bg-slate-200 h-screen w-screen bg-cover font-Spartan">
      <Header/>
      <Filter />
      <JobList jobData={jobData} />
    </div>
  )
}

export default App
