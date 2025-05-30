
import { NavItem, Stat, LoanTermOption, LoanPurpose, AIMatchProfile } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Cómo funciona', path: '/home', sectionId: 'home-how-it-works' },
  { label: 'Market P2P', path: '/marketp2p', sectionId: 'marketp2p' },
  { label: 'Solicitar Prestamo', path: '/prestamos', sectionId: 'prestamos' },
  { label: 'Invertir', path: '/inversionistas', sectionId: 'inversionistas' },
];

// Retaining other navigation items for potential future use or different contexts if needed.
// These are not used in the primary header as per the new design.
export const FULL_NAV_ITEMS_LEGACY: NavItem[] = [
  { label: 'Inicio', path: '/home', sectionId: 'home' },
  { label: 'Market P2P', path: '/marketp2p', sectionId: 'marketp2p' },
  { label: 'Inversionistas', path: '/inversionistas', sectionId: 'inversionistas' },
  { label: 'Préstamos', path: '/prestamos', sectionId: 'prestamos' },
  { label: 'Registro', path: '/registro', sectionId: 'registro' },
];


export const HOME_STATS: Stat[] = [
  { 
    id: 'valorTotal', 
    labelTop: 'VALOR TOTAL', 
    valueString: '$25M+', 
    label: 'Préstamos Desembolsados' 
  },
  { 
    id: 'crecimiento', 
    labelTop: 'CRECIMIENTO', 
    valueString: '$3.5M+', 
    label: 'Intereses Recaudados' 
  },
  { 
    id: 'comunidad', 
    labelTop: 'COMUNIDAD', 
    valueString: '10K+', 
    label: 'Usuarios Activos' 
  },
];


export const INVESTMENT_GROWTH_DATA = [
  { name: 'Ene', value: 1000 },
  { name: 'Feb', value: 1050 },
  { name: 'Mar', value: 1120 },
  { name: 'Abr', value: 1180 },
  { name: 'May', value: 1250 },
  { name: 'Jun', value: 1350 },
];

export const EARNINGS_DATA = [
  { name: 'Mar', value: 120 },
  { name: 'Abr', value: 190 },
  { name: 'May', value: 150 },
  { name: 'Jun', value: 210 },
];

export const LOAN_PURPOSES: LoanPurpose[] = [
  LoanPurpose.HomeImprovements,
  LoanPurpose.DebtConsolidation,
  LoanPurpose.MedicalExpenses,
  LoanPurpose.Education,
  LoanPurpose.Other,
];

export const LOAN_TERM_OPTIONS: LoanTermOption[] = [
    { value: 1, label: "1 Semana (3% interés)", interestRate: 0.03 },
    { value: 2, label: "2 Semanas (5% interés)", interestRate: 0.05 },
    { value: 3, label: "3 Semanas (7% interés)", interestRate: 0.07 },
    { value: 4, label: "4 Semanas (10% interés)", interestRate: 0.10 },
];

export const API_KEY_ERROR_MESSAGE = "API key not configured. Please set the API_KEY environment variable.";
export const GEMINI_MODEL_TEXT = 'gemini-2.5-flash-preview-04-17';

export const MOCK_AI_PROFILES_INVESTOR_SEARCHING_LOAN: AIMatchProfile[] = [ // Investor looking for loans
    {
        id: 'P00X1',
        risk: 'Bajo',
        level: 'Calificación A',
        detail: 'Necesita fondos para comprar un nuevo vehículo para su negocio de entregas. Historial crediticio impecable y plan de negocio sólido.',
        profileType: 'borrower_loan' as const,
        loanAmount: 75,
        loanPurpose: 'Adquisición de vehículo comercial',
        loanWeeks: 3,
        loanInterestRate: 0.07 // 7% semanal
    },
    {
        id: 'P00X2',
        risk: 'Medio',
        level: 'Calificación B',
        detail: 'Busca consolidar deudas de tarjetas de crédito con altas tasas de interés. Empleo estable y buen potencial de repago.',
        profileType: 'borrower_loan' as const,
        loanAmount: 100,
        loanPurpose: 'Consolidación de deuda',
        loanWeeks: 4,
        loanInterestRate: 0.10 // 10% semanal
    },
    {
        id: 'P00X3',
        risk: 'Bajo',
        level: 'Calificación A+',
        detail: 'Requiere financiamiento para un curso de especialización profesional. Proyecto educativo prometedor con alta empleabilidad.',
        profileType: 'borrower_loan' as const,
        loanAmount: 50,
        loanPurpose: 'Financiamiento Educativo',
        loanWeeks: 2,
        loanInterestRate: 0.05 // 5% semanal
    }
];

export const MOCK_AI_PROFILES_BORROWER_SEARCHING_INVESTOR: AIMatchProfile[] = [ // Borrower looking for investors
    { 
        id: 'I00A1', 
        risk: 'Adaptable', 
        level: 'Gold', 
        detail: 'Invierte en proyectos educativos de bajo riesgo. Prefiere 2-4 semanas.', 
        profileType: 'investor' as const,
        exactInvestmentAmount: 75,
        preferredTerms: { interestRate: 0.05, weeks: 4 }
    },
    { 
        id: 'I00B2', 
        risk: 'Moderado', 
        level: 'Silver', 
        detail: 'Busca diversificar en varios sectores, tolerancia media. Plazos flexibles.', 
        profileType: 'investor' as const,
        exactInvestmentAmount: 100,
        preferredTerms: { interestRate: 0.07, weeks: 3 }
    },
    { 
        id: 'I00C3', 
        risk: 'Bajo', 
        level: 'Gold', 
        detail: 'Prefiere plazos cortos y proyectos tecnológicos. Interés competitivo.', 
        profileType: 'investor' as const,
        exactInvestmentAmount: 50,
        preferredTerms: { interestRate: 0.06, weeks: 2 }
    }
];

export const LOAN_REQUEST_PURPOSES = ["Mejoras del hogar", "Consolidación de deuda", "Educación", "Viaje", "Emergencia médica", "Compra de vehículo", "Pequeña empresa"];
export const LOAN_REQUEST_AMOUNTS = [20, 50, 75, 100]; // Updated to reflect $20-$100 range
export const LOAN_REQUEST_RISKS = ["Bajo", "Medio", "Alto"];

export const FUNDING_OFFER_INTERESTS = ["proyectos tecnológicos", "pequeñas empresas", "consolidación de deudas", "educación continua", "proyectos de arte", "startups innovadoras"];
const ALL_FUNDING_OFFER_AMOUNTS = [50, 75, 100, 250, 500, 1000, 2500, 5000, 10000, 20000];
export const FUNDING_OFFER_AMOUNTS = ALL_FUNDING_OFFER_AMOUNTS.filter(amount => amount <= 100);
export const FUNDING_OFFER_RATES = ["3% (1 sem)", "5% (2 sem)", "7% (3 sem)", "10% (4 sem)"];