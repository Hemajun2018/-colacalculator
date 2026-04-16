import { COLA_DATA } from "./cola-data";

// SSA official rounding: round down to nearest dime ($0.10)
function roundDownToDime(amount: number): number {
  return Math.floor(amount * 10) / 10;
}

// SSA official rounding: round down to nearest dollar
function roundDownToDollar(amount: number): number {
  return Math.floor(amount);
}

export interface COLAResult {
  grossMonthlyBenefit: number;
  netMonthlyPayable: number;
  monthlyIncrease: number;
  annualIncrease: number;
  netMonthlyChange: number;
}

export function calculateCOLA(
  currentBenefit: number,
  colaPercentage: number
): COLAResult {
  const rawIncrease = currentBenefit * (colaPercentage / 100);
  const newBenefit = roundDownToDime(currentBenefit + rawIncrease);
  const monthlyIncrease = newBenefit - currentBenefit;

  const currentNet = currentBenefit - COLA_DATA.medicarePremium;
  const newNet = newBenefit - COLA_DATA.projectedMedicarePremium;
  const netPayable = roundDownToDollar(newNet);
  const currentNetPayable = roundDownToDollar(currentNet);

  return {
    grossMonthlyBenefit: newBenefit,
    netMonthlyPayable: netPayable,
    monthlyIncrease,
    annualIncrease: monthlyIncrease * 12,
    netMonthlyChange: netPayable - currentNetPayable,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatCurrencyWhole(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
