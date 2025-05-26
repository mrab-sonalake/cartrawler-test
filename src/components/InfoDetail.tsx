import type { VehicleWithVendor } from "../types/VehicleAvailability";
import Icon from "./Icon";
import Typography from "./Typography";

type Props = {
  vehicle: VehicleWithVendor;
};

const InfoDetail = ({ vehicle: { TotalCharge, Vehicle } }: Props) => (
  <>
    <Typography className="infoDetail">
      <Icon icon="Transmission" style={{ marginRight: "0.313em" }} />
      Transmission type: {Vehicle["@TransmissionType"]}
    </Typography>

    <Typography className="infoDetail">
      <Icon icon="Fuel" style={{ marginRight: "0.313em" }} />
      Fuel type: {Vehicle["@FuelType"]}
    </Typography>

    <Typography className="infoDetail">
      <Icon icon="Person" style={{ marginRight: "0.313em" }} />
      Passenger quantity: {Vehicle["@PassengerQuantity"]}
    </Typography>

    <Typography className="infoDetail">
      <Icon icon="Door" style={{ marginRight: "0.313em" }} />
      Doors: {Vehicle["@DoorCount"]}
    </Typography>

    <Typography className="infoDetail">
      <Icon icon="Bag" style={{ marginRight: "0.313em" }} />
      Baggage quantity: {Vehicle["@BaggageQuantity"]}
    </Typography>

    <Typography className="infoDetail">
      <Icon icon="Snowflake" style={{ marginRight: "0.313em" }} />
      Air conditioning:{" "}
      {Vehicle["@AirConditionInd"] === "true" ? "included" : "not included"}
    </Typography>

    <Typography className="infoDetail">
      Price: {TotalCharge["@RateTotalAmount"]}
      {TotalCharge["@CurrencyCode"]}
    </Typography>
  </>
);

export default InfoDetail;
