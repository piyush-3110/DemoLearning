import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Feed = lazy(() => import("./Components/Feed"));

const Landing = lazy(() => import("./Components/Landing"));
export default function App() {
  //always use useNavigate inside BrowserRouter else there will be error
  return (
    <>
      <BrowserRouter>
        <div>
          <Navigate />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading</div>}>
                <Feed></Feed>
              </Suspense>
            }
          ></Route>
          <Route
            path="/land"
            element={
              <Suspense fallback={<div>Loading actual data</div>}>
                <Landing></Landing>
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export function Navigate() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => navigate("/")}>Feed</button>
        <button onClick={() => navigate("/land")}>Landing</button>
      </div>
    </>
  );
}
