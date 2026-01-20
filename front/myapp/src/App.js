import { Route, Routes } from "react-router-dom";
import Customers from "./Components/Customers";
import Help from "./Components/Help";
import HelpConnect from "./Components/HelpConnect";
import History from "./Components/History";
import LayoutLogin from "./Components/LayoutLogin";
import LayoutPrivate from "./Components/LayoutPrivate";
import Login from "./Components/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (

      <Routes>

        {/* PUBLIC LAYOUT */}
        <Route element={<LayoutLogin />}>
          <Route path="/login" element={<Login />} />
          <Route path="/lg/help" element={<Help />} />
        </Route>

        {/* PRIVATE LAYOUT */}
        <Route
          element={
            <ProtectedRoute>
              <LayoutPrivate />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<HelpConnect />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/history/:customerId" element={<History />} />
        </Route>

      </Routes>

  );
};

export default App;
