import { RouterProvider } from "react-router-dom"
import { Mainrouter } from "./router/mainrouter"


const App = () => {
  return (
    <div>
      <RouterProvider router={Mainrouter} />
    </div>
  )
}

export default App