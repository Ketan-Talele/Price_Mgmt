export interface DateItem {
  id: string;
  DateFrom: string; // ISO date value (YYYY-MM-DD)
  Value: number;
}

export const DATE_ITEMS: DateItem[] = [
  { id: '1', DateFrom: '2025-01-01', Value: 1000 },
  { id: '2', DateFrom: '2025-03-01', Value: 1050 },
  { id: '3', DateFrom: '2025-12-01', Value: 1070 },
];
