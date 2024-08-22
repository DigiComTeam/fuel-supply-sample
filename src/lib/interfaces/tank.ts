export interface ITankLastLevel {
  stationName: string;
  stationCode: number;
  statusDate: string;
  capacity: number;
  productName: string;
  tankNo: number;
  productShortName: string;
  fuelLevelMM: number;
  fuelLevelLT: number;
  waterLevelMM: number;
  waterLevelLT: number;
}

export interface IFetchTankLastLevelsResponse {
  status: string;
  data: {
    levels: ITankLastLevel[];
  };
}
