import {BrowserRouter, Route, Routes} from "react-router-dom";

import Login from "./pages/Login.tsx";
import Todo from "./pages/Todo.tsx";
import CommonLayout from "./components/layout/CommonLayout.tsx";
import Register from "./pages/Register.tsx";

function App() {


  return (
      <BrowserRouter>
          <Routes>
              {/* header need page */}
              <Route element={<CommonLayout/>}>
                  <Route path={'/todo'} element={<Todo/>}></Route>
              </Route>

              {/* no header page*/}
              <Route>
                  <Route path={'/'} element={<Login/>}></Route>
                  <Route path={'/register'} element={<Register/>}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
