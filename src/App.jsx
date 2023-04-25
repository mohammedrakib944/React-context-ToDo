import { ContextProvider } from "./context/store";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./pages/All";
import Today from "./pages/Today";
import Upcomming from "./pages/Upcomming";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/today" element={<Today />} />
            <Route path="/upcomming" element={<Upcomming />} />
          </Routes>
        </Layout>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
