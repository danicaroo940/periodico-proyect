import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./AppRoutes"
import { Header } from "./assets/components/Header/Header"
import { GlobalProvider } from "./assets/context/GlobalContext"


function App() {

  return (
  <GlobalProvider>
    <BrowserRouter>
          <Header />
          <AppRoutes />
    </BrowserRouter>
  </GlobalProvider>
  )
}

export default App
