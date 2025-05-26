import type { SortableProperty } from "../pages/Vehicles/Vehicles";
import type { VehicleWithVendor } from "../types/VehicleAvailability";

export const getSortedVehicles = (
  vehicles: VehicleWithVendor[],
  sortBy: SortableProperty
) => {
  switch (sortBy) {
    case "price":
      return vehicles.toSorted(
        (a, b) =>
          parseFloat(a.TotalCharge["@RateTotalAmount"]) -
          parseFloat(b.TotalCharge["@RateTotalAmount"])
      );
    case "name":
      return vehicles.toSorted((a, b) =>
        a.Vehicle.VehMakeModel["@Name"].localeCompare(
          b.Vehicle.VehMakeModel["@Name"]
        )
      );
    case "doorCount":
      return vehicles.toSorted(
        (a, b) =>
          parseInt(a.Vehicle["@DoorCount"]) - parseInt(b.Vehicle["@DoorCount"])
      );
    case "baggageQuantity":
      return vehicles.toSorted(
        (a, b) =>
          parseInt(a.Vehicle["@BaggageQuantity"]) -
          parseInt(b.Vehicle["@BaggageQuantity"])
      );
    default:
      return vehicles;
  }
};
