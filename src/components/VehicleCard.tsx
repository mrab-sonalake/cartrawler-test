import { useNavigate } from "react-router";
import { VENDOR_LOGOS } from "../constants";
import type { VehicleWithVendor } from "../types/VehicleAvailability";
import Button from "./Button";
import InfoDetail from "./InfoDetail";

type Props = {
  vehicle: VehicleWithVendor;
  vehicleIndex: number;
};

const VehicleCard = ({ vehicle, vehicleIndex }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="vehicleCard">
      <img
        src={VENDOR_LOGOS[vehicle.Vendor["@Name"]]}
        style={{
          height: 20,
          width: "100%",
          margin: "0.75em auto",
        }}
        alt={`Company logo - ${vehicle.Vendor["@Name"]}`}
      />

      <img
        src={vehicle.Vehicle.PictureURL}
        style={{ height: 100, margin: "auto" }}
        alt={`Vehicle illustration - ${vehicle.Vehicle.VehMakeModel["@Name"]}`}
      />

      <InfoDetail vehicle={vehicle} />

      {vehicle["@Status"] === "Available" ? (
        <Button onClick={() => navigate(`/vehicles/${vehicleIndex}`)}>
          Details
        </Button>
      ) : (
        <Button type="disabled">Details</Button>
      )}
    </div>
  );
};

export default VehicleCard;
