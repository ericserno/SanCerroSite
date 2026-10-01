export type TipCategory =
  | "opening"
  | "event"
  | "lost-pet"
  | "fundraiser"
  | "garage-sale"
  | "correction"
  | "other";

export type TipStatus = "pending" | "approved" | "rejected";

export type Tip = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  category: TipCategory;
  title: string;
  details: string;
  location?: string;
  whenText?: string;
  status: TipStatus;
};

export type TipFormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<Record<string, string>>;
};

export const tipCategories: { value: TipCategory; label: string }[] = [
  { value: "opening", label: "Restaurant / store opening" },
  { value: "event", label: "Community event" },
  { value: "lost-pet", label: "Lost or found pet" },
  { value: "fundraiser", label: "School / neighborhood fundraiser" },
  { value: "garage-sale", label: "Garage sale weekend" },
  { value: "correction", label: "Correction to the site" },
  { value: "other", label: "Something else" },
];
