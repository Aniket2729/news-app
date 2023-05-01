import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import NewsContainer from "./Component/NewsContainer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route key="general"
          exact
          path="/general"
          element={
            <NewsContainer pageSize={20} country="us" category="general" />
          }
        />
        <Route key="health"
          exact
          path="/health"
          element={
            <NewsContainer pageSize={20} country="us" category="health" />
          }
        />
        <Route key="sports"
          exact
          path="/sports"
          element={
            <NewsContainer pageSize={20} country="us" category="sports" />
          }
        />
        <Route key="technology"
          exact
          path="/technology"
          element={
            <NewsContainer pageSize={20} country="us" category="technology" />
          }
        />
        <Route key="sciene"
          exact
          path="/science"
          element={
            <NewsContainer pageSize={20} country="us" category="science" />
          }
        />
        <Route key="business"
          exact
          path="/business"
          element={
            <NewsContainer pageSize={20} country="us" category="business" />
          }
        />
        <Route key="entertainment"
          exact
          path="/entertainment"
          element={
            <NewsContainer
              pageSize={20}
              country="us"
              category="entertainment"
            />
          }
        />
      </Routes>
    </>
  );

}

export default App;
