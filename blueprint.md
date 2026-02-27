# Global Nomad Vault Blueprint

## Overview

Global Nomad Vault is a web application designed to help digital nomads calculate their potential tax liabilities across different countries, optimize their global health insurance, and track their visa/tax residency status. It uses a step-by-step input form to gather detailed user data, simulates tax/insurance outcomes, and provides a customized report with affiliate integrations.

## Implemented Features

### Initial Setup
- **Project Initialization:** React application using Vite.
- **Version Control:** Managed using Git.
- **Styling:** Tailwind CSS.

## Development Plan

**Phase 1: Project Setup & Routing** (Completed)
- Installed dependencies: `react-router-dom`, `lucide-react`, `zustand`, `recharts`, Tailwind CSS v4.
- Set up React Router with main routes (`/`, `/form`, `/report`, `/tracker`).
- Created main layout and navigation (`MainLayout.tsx`).

**Phase 2: Deeper Input Form (Multi-step)** (Completed)
- Created a multi-step form (`FormFlow.tsx`) using Zustand for state management (`useStore.ts`).
- Step 1: Income (Amount, Source, Employment Type)
- Step 2: Journey (Countries, Duration, Visa)
- Step 3: Coverage (Current Insurance, Health Conditions)
- Step 4: Strategy (Retirement, Deductibles)

**Phase 3: Report & Simulation Dashboard** (Completed)
- Mocked calculation logic and built Report UI (`Report.tsx`).
- Implemented contextual affiliate link placeholders (SafetyWing).

**Phase 4: Retention System (Tax Day Tracker)** (Completed)
- Created UI for tracking days spent in each country against the 183-day rule (`Tracker.tsx`).
- Implemented warning indicators for approaching tax residency limits.

**Phase 5: Firebase Integration (Pending)**
- Auth and Firestore setup for saving user profiles and reports.
