
export interface NavItem {
  label: string;
  path: string;
  sectionId: string;
}

export interface Stat {
  id: string;
  label: string; // Used as labelBottom in the new design
  targetValue?: number; // For animation if valueString is not provided
  initialValue?: number;
  isCurrency?: boolean; // Still relevant if targetValue is used
  labelTop?: string; // e.g., "VALOR TOTAL" - new
  valueString?: string; // e.g., "$25M+" - new, if present, overrides animation
}

export interface MarketItem {
  id: string;
  user: string;
  purpose: string;
  amount: number;
  terms: string; // e.g., "4 semanas" or "Tasa: 7% (3 sem)"
  risk?: string; // For loan requests
  interest?: string; // For funding offers
  type: 'request' | 'offer';
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface Loan {
  id:string;
  purpose: string;
  amount: number;
  startDate: string;
  dueDate: string;
  status: 'Activo' | 'Pagado' | 'Vencido';
}

export interface Payment {
  id: string;
  loanId: string;
  amount: number;
  date: string;
  method: string;
}

export interface AIMatchProfile {
  id: string;
  risk: string; // For loans (borrower_loan type), or investor's risk tolerance (investor type)
  level: string; // For investor level (Gold, Silver) or loan grade (A, B for borrower_loan type)
  detail: string; // General description or summary
  profileType: 'investor' | 'borrower_loan'; // To distinguish AI match types

  // Fields specific to 'investor' profiles (when a borrower is searching for investors)
  exactInvestmentAmount?: number;
  preferredTerms?: { interestRate: number; weeks: number; };

  // Fields specific to 'borrower_loan' profiles (when an investor is searching for loans)
  loanAmount?: number;       // e.g., 100 (for $100)
  loanPurpose?: string;      // e.g., "Adquisición de vehículo"
  loanWeeks?: number;        // e.g., 4 (for 4 weeks)
  loanInterestRate?: number; // e.g., 0.07 (for 7% weekly interest)
}

export enum RegistrationType {
  Investor = 'inversorReg',
  Borrower = 'prestatarioReg',
  Premium = 'premiumReg',
}

export enum LoanPurpose {
  HomeImprovements = "Mejoras del hogar",
  DebtConsolidation = "Consolidación de deudas",
  MedicalExpenses = "Gastos médicos",
  Education = "Educación",
  Other = "Otro",
}

export interface LoanTermOption {
  value: number; // weeks
  label: string; // e.g., "1 Semana (3% interés)"
  interestRate: number; // e.g., 0.03
}