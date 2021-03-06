export interface BasicItem {
  name: string,
  guid: number,
  icon: string,
  locaText: { [key: string]: string },
}

export interface Need {
  tpmin: number,
  guid: number,
  happiness?: number,
}

export interface TotalNeeds {
  [guid: number]: { totalTpmin: number }
}

export interface PopulationLevel extends BasicItem {
  fullHouse: number,
  needs: [Need],
}

export interface Workforce extends BasicItem {
}

export interface Product extends BasicItem {
  producer?: number,  // producer guid
}

// product category
export interface ProductFilter extends BasicItem {
  products: [number],
}

export interface FactoryProductMeta {
  Product: number,
  Amount: number,
  StorageAmount: number,
}

export interface Factory extends BasicItem {
  tpmin: number,  // unit per minute
  outputs: [FactoryProductMeta],
  inputs?: [FactoryProductMeta],
  maintenances?: any,  // coin; workforce
}

export type FactoryState = {
  boost: number,  // in percentage (no decimal)
  count: number,
  neededTpmin: number,
};

export type State = {
  language: string,
  populations: { [guid: number]: number },
  factoryStates: { [guid: number]: FactoryState },
};

export type GuidMap<T> = { [key: number]: T };
