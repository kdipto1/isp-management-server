export type IPackageFilterRequest = {
  searchTerm?: string;
  name?: string;
  price?: number;
  bandwidth?: number;
  iptv?: boolean;
  bdix?: boolean;
  minPrice?: number;
  maxPrice?: number;
};
