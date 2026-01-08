import './App.css'
import {coursesTitleArray} from "./data/course.ts";


const App = () => {

  return (
    <>
      <ul>
        {
          coursesTitleArray.map((value, index) => <li key={index}>{value}</li>)
        }
      </ul>
    </>
  )
}

export default App;
