export interface FacilityResponse {
  message: string;
  status: boolean;
  data: Data;
}

export interface Data {
  resourceType: string;
  id: string;
  meta: Meta;
  type: string;
  link: Link[];
  entry: Entry[];
}

export interface Meta {
  lastUpdated: string;
}

export interface Link {
  relation: string;
  url: string;
}

export interface Entry {
  fullUrl: string;
  resource: Resource;
  search: Search;
}

export interface Resource {
  resourceType: string;
  id: string;
  extension: Extension[];
  status: string;
  name: string;
  alias: string[];
  type: Type[];
  telecom: Telecom[];
  address: Address;
  position: Position;
  managingOrganization: ManagingOrganization;
  partOf: PartOf;
  hoursOfOperation: HoursOfOperation[];
}

export interface Extension {
  url: string;
  valueCode?: string;
  valueString?: string;
  valueReference?: ValueReference;
  valueInteger?: number;
}

export interface ValueReference {
  reference: string;
}

export interface Type {
  coding: Coding[];
}

export interface Coding {
  code: string;
  display: string;
}

export interface Telecom {
  system: string;
  value: string;
  use: string;
  rank: number;
}

export interface Address {
  use: string;
  type: string;
  text: string;
  line: string[];
  postalCode: string;
  country: string;
}

export interface Position {
  longitude: number;
  latitude: number;
  altitude: number;
}

export interface ManagingOrganization {
  reference: string;
  type: string;
  display: string;
}

export interface PartOf {
  reference: string;
  type: string;
  display: string;
}

export interface HoursOfOperation {
  allDay: boolean;
  openingTime: string;
  closingTime: string;
}

export interface Search {
  mode: string;
}
