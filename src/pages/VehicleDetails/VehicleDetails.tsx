import { Link, useParams } from "react-router";
import { useVehicles } from "../../hooks/useVehicles";
import AngleLeft from "../../assets/icons/angle-left.svg";
import { VENDOR_LOGOS } from "../../constants";
import Loader from "../../components/Loader";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
import InfoDetail from "../../components/InfoDetail";

const VehicleDetails = () => {
  // Since there are no properties in vehicles that are unique, I resorted to using the index here as well
  const { vehicleIndex } = useParams<{ vehicleIndex: string }>();

  const { data, isPending, error } = useVehicles();

  if (isPending || !data || !vehicleIndex) {
    return <Loader />;
  }

  if (error) {
    return "An error has occurred: " + error.message;
  }

  const vehicle = data.vehicles?.[parseInt(vehicleIndex)];

  const { Vehicle, Vendor } = vehicle;

  return (
    <div>
      <Link to="../">
        <img
          src={AngleLeft}
          alt="Back"
          style={{ height: 10, marginRight: "0.313em" }}
        />
        Back to previous page
      </Link>

      <Typography type="title-xl" style={{ margin: "0.5em 0 1em" }}>
        {Vehicle.VehMakeModel["@Name"]}
      </Typography>

      <Typography type="subtitle-m" className="rentalCompany">
        Rental company:
        <img
          src={VENDOR_LOGOS[Vendor["@Name"]]}
          style={{ height: 20 }}
          alt={`Company logo - ${Vendor["@Name"]}`}
        />
      </Typography>

      <img
        src={Vehicle.PictureURL}
        style={{ height: 100, margin: "1.25em auto" }}
        alt={`Vehicle illustration - ${Vehicle.VehMakeModel["@Name"]}`}
      />

      <InfoDetail vehicle={vehicle} />

      <Button
        style={{ marginTop: "1em" }}
        onClick={() =>
          alert(
            `${Vehicle.VehMakeModel["@Name"]} from ${Vendor["@Name"]} booked!`
          )
        }
      >
        Book
      </Button>
    </div>
  );
};

export default VehicleDetails;
