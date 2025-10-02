import routes from "./routes/Routes";
import { useRoutes } from "react-router-dom"
//  styles
import "./App.css"


// pages
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";


function App() {

    const route: React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | null = useRoutes(routes)

  return (
        <>
      <div>
        <BottomNavBar />
        {route}
      </div>
      
 
    </>
  )
}

export default App
