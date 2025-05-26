export type VehiclesResponse = Array<{ VehAvailRSCore: VehAvailRSCore }>;

type VehAvailRSCore = {
  VehRentalCore: VehRentalCore;
  VehVendorAvails: VehVendorAvail[];
};

type VehRentalCore = {
  "@PickUpDateTime": string;
  "@ReturnDateTime": string;
  PickUpLocation: {
    "@Name": string;
  };
  ReturnLocation: {
    "@Name": string;
  };
};

type VehVendorAvail = {
  Vendor: Vendor;
  VehAvails: VehAvail[];
};

export type VendorName = "ALAMO" | "AVIS" | "HERTZ";

export type Vendor = {
  "@Code": string;
  "@Name": VendorName;
};

export type VehAvail = {
  "@Status": "Available" | "Unavailable";
  Vehicle: Vehicle;
  TotalCharge: TotalCharge;
};

type Vehicle = {
  "@AirConditionInd": "true" | "false";
  "@TransmissionType": "Automatic";
  "@FuelType": "Petrol";
  "@DriveType": "Unspecified";
  "@PassengerQuantity": "5" | "5+";
  "@BaggageQuantity": "2" | "3" | "4" | "5";
  "@Code": "FDAR" | "FCAR" | "IFAR" | "LDAR" | "PDAR" | "ECAR" | "CDAR";
  "@CodeContext": "CARTRAWLER";
  "@DoorCount": "2" | "3" | "4" | "5";
  VehMakeModel: {
    "@Name": `${string} or similar`;
  };
  PictureURL: `https://ctimg-fleet.cartrawler.com/${string}/primary.png?auto=format&w=600`;
  "@Size"?: `${number}`;
};

type TotalCharge = {
  "@RateTotalAmount": `${number}.${number}`;
  "@EstimatedTotalAmount": string;
  "@CurrencyCode": "CAD";
};

export type VehicleWithVendor = VehAvail & { Vendor: Vendor };
