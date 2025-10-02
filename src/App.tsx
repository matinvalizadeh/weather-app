import routes from "./routes/Routes";
import { useRoutes } from "react-router-dom"
//  styles
import "./App.css"


// pages


function App() {

    const route: React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | null = useRoutes(routes)

  return (
        <>
      <div>
        {route}
      </div>
      
 
    </>
  )
}

export default App
