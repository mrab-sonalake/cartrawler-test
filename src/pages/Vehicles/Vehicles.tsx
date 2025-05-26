import { useVehicles } from "../../hooks/useVehicles";
import { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import Loader from "../../components/Loader";
import Icon from "../../components/Icon";
import VehicleCard from "../../components/VehicleCard";
import Typography from "../../components/Typography";

const SORT_BY_PROPERTIES = {
  price: {
    label: "Price",
    value: "price",
  },
  name: {
    label: "Name",
    value: "name",
  },
  doorCount: {
    label: "Number of doors",
    value: "doorCount",
  },
  baggageQuantity: {
    label: "Baggage Quantity",
    value: "baggageQuantity",
  },
} as const;

export type SortableProperty = keyof typeof SORT_BY_PROPERTIES;

const Vehicles = () => {
  const [sortBy, setSortBy] = useState<SortableProperty>(
    SORT_BY_PROPERTIES.price.value
  );

  const { data, isPending, error } = useVehicles(sortBy);

  if (isPending || !data) {
    return <Loader />;
  }

  if (error) {
    return "An error has occurred: " + error.message;
  }

  return (
    <div>
      <Typography type="title-xl" style={{ marginBottom: "1em" }}>
        Vehicle availability
      </Typography>

      <div className="pickupInfoContainer">
        <div className="pickupInfo">
          <Typography type="subtitle-m">Pickup information</Typography>

          <Typography>
            Time:{" "}
            {formatDate(data.VehRentalCore.VehRentalCore["@PickUpDateTime"])}
          </Typography>

          <Typography className="pickupInfoLocation">
            Location: {data.VehRentalCore.VehRentalCore.PickUpLocation["@Name"]}
            <Icon icon="Plane" style={{ marginLeft: 5 }} />
          </Typography>
        </div>

        <div className="pickupInfo">
          <Typography type="subtitle-m">Return information</Typography>

          <Typography>
            Time:{" "}
            {formatDate(data.VehRentalCore.VehRentalCore["@ReturnDateTime"])}
          </Typography>

          <Typography className="pickupInfoLocation">
            Location: {data.VehRentalCore.VehRentalCore.ReturnLocation["@Name"]}{" "}
            <Icon icon="Plane" style={{ marginLeft: "0.313em" }} />
          </Typography>
        </div>
      </div>

      <label htmlFor="sortBy" className="body-m">
        Sort by:{" "}
      </label>

      <select
        name="sortBy"
        id="sortBy"
        style={{ marginTop: "3em" }}
        onChange={(e) => setSortBy(e.target.value as SortableProperty)}
      >
        {(Object.keys(SORT_BY_PROPERTIES) as SortableProperty[]).map(
          (property) => (
            <option key={property} value={SORT_BY_PROPERTIES[property].value}>
              {SORT_BY_PROPERTIES[property].label}
            </option>
          )
        )}
      </select>

      <div className="vehicleList">
        {data.vehicles.map((vehicle, index) => (
          <VehicleCard
            // Since vehicles don't have their own id's (or any properties that would be unique for that matter), I resorted to using the index as key
            key={index}
            vehicle={vehicle}
            vehicleIndex={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
