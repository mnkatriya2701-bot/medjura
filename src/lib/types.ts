// ─── Division ────────────────────────────────────────────────────────────────

export type DivisionId = "ortho" | "gynec" | "physicians";

export interface Division {
  id: DivisionId;
  name: string;
  label: string;
  tagline: string;
  description: string;
  color: string;
  accentColor: string;
  icon: string;
}

// ─── Product ─────────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  division: DivisionId;
  /** All divisions this product is positioned in — used to show multiple badges (e.g. on the homepage slider). Defaults to [division] when omitted. */
  divisions?: DivisionId[];
  tagline: string;
  description: string;
  composition: string;
  indications: string[];
  packSize: string;
  dosage: string;
  form?: string;
  image: string;
  featured: boolean;
  /** Show this product in the homepage hero slider */
  slide?: boolean;
}

export interface ProductsData {
  divisions: Division[];
  products: Product[];
}

// ─── Branch / Company ────────────────────────────────────────────────────────

export interface Address {
  line1: string;
  line2: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  country: string;
}

export interface Contact {
  phone: string;
  email: string;
  mr?: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export type BranchType = "headquarters" | "branch";

export interface Branch {
  id: string;
  name: string;
  type: BranchType;
  region?: string;
  address: Address;
  contact: Contact;
  coordinates?: Coordinates;
  mapUrl?: string;
  image?: string;
  active: boolean;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  founded: string;
  cin: string;
  gstin: string;
  email: string;
  phone: string;
  website: string;
}

export interface BranchesData {
  company: CompanyInfo;
  headquarters: Branch;
  branches: Branch[];
  coverageAreas: string[];
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── SEO ─────────────────────────────────────────────────────────────────────

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}
