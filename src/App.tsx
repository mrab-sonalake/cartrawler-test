import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import VehicleDetails from "./pages/VehicleDetails/VehicleDetails";
import Vehicles from "./pages/Vehicles/Vehicles";

const App = () => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      padding: 20,
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/:vehicleIndex" element={<VehicleDetails />} />

        <Route path="*" element={<Navigate replace to="/vehicles" />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
