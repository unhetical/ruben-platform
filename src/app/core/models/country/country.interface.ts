export interface CountryModel {
  name: Name;
  tld?: string[];
  cca2?: string;
  ccn3?: string;
  cca3?: string;
  cioc?: string;
  independent?: boolean;
  status?: string;
  unMember?: boolean;
  currencies?: Object;
  idd?: Idd;
  capital?: string[];
  altSpellings?: string[];
  region?: string;
  subregion?: string;
  languages?: Object;
  translations?: { [key: string]: Translation };
  latlng?: number[];
  landlocked?: boolean;
  area?: number;
  flag?: string;
  flags?: Flags[];
  demonyms?: Object;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Name {
  official: string;
  common?: string;
  nativeName?: Object;
}

export interface Translation {
  official: string;
  common: string;
}

export interface Flags {
  svg: string;
  png: string;
}
