import { create } from 'zustand';

export type UserData = {
  // Step 1: Income
  incomeAmount: number;
  incomeCurrency: string;
  incomeCountry: string;
  employmentType: 'Freelancer' | 'Corporate' | 'Business Owner';
  
  // Step 2: Journey
  currentCountry: string;
  plannedCountries: Array<{ name: string; days: number; visaType: string }>;
  
  // Step 3: Coverage
  hasExistingInsurance: boolean;
  preExistingConditions: string;
  coveragePreference: 'Basic' | 'Comprehensive' | 'Extreme Sports';
  
  // Step 4: Strategy
  hasRetirementAccount: boolean;
  deductibleExpenses: number;
};

interface AppState {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
  resetUserData: () => void;
}

const initialUserData: UserData = {
  incomeAmount: 0,
  incomeCurrency: 'USD',
  incomeCountry: 'US',
  employmentType: 'Freelancer',
  currentCountry: '',
  plannedCountries: [],
  hasExistingInsurance: false,
  preExistingConditions: '',
  coveragePreference: 'Basic',
  hasRetirementAccount: false,
  deductibleExpenses: 0,
};

export const useStore = create<AppState>((set) => ({
  userData: initialUserData,
  updateUserData: (data) =>
    set((state) => ({ userData: { ...state.userData, ...data } })),
  resetUserData: () => set({ userData: initialUserData }),
}));
