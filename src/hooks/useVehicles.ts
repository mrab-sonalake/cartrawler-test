import { useQuery } from "@tanstack/react-query";
import type {
  VehiclesResponse,
  VehicleWithVendor,
} from "../types/VehicleAvailability";
import type { SortableProperty } from "../pages/Vehicles/Vehicles";
import { getSortedVehicles } from "../utils/getSortedVehicles";

export const useVehicles = (sortBy: SortableProperty = "price") => {
  return useQuery({
    queryKey: ["vehicles"],
    queryFn: async (): Promise<VehiclesResponse> => {
      const response = await fetch(
        "https://ajaxgeo.cartrawler.com/ctabe/cars.json"
      );

      return await response.json();
    },
    select: ([data]) => {
      const { VehVendorAvails } = data.VehAvailRSCore;

      const vehicles = VehVendorAvails.reduce(
        (acc, curr, index) =>
          acc.concat(
            curr.VehAvails.map((vehicle) => ({
              ...vehicle,
              Vendor: VehVendorAvails[index].Vendor,
            }))
          ),
        [] as VehicleWithVendor[]
      );

      return {
        vehicles: getSortedVehicles(vehicles, sortBy),
        VehRentalCore: data.VehAvailRSCore,
      };
    },
  });
};
