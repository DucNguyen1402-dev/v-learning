export interface TableRow {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Pending" | "Inactive";
  createdAt: string;
  amount: number;
}
