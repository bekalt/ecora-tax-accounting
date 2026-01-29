export type TaxUpdate = {
  title: string;
  summary: string;
  dateLabel: string; // e.g. "2025 tax year" or "Effective 2026"
  href: string; // link to a reputable source page
  source: string; // label shown on UI
};

export const taxUpdates: TaxUpdate[] = [
  {
    title: "Child Tax Credit increased by $200 (federal)",
    summary:
      "For the 2025 tax year, the maximum federal Child Tax Credit is reported as $2,200 per qualifying child (up from $2,000).",
    dateLabel: "2025 tax year",
    href: "https://bipartisanpolicy.org/article/how-the-obbb-changes-to-the-child-tax-credit-will-impact-families/",
    source: "Bipartisan Policy Center",
  },
  {
    title: "Child & Dependent Care Credit changes coming",
    summary:
      "New legislation is expected to change the federal Child and Dependent Care Tax Credit beginning in 2026, affecting rates/limits for some households.",
    dateLabel: "Begins 2026",
    href: "https://taxpolicycenter.org/taxvox/2025-reconciliation-law-makes-some-modest-changes-child-care-tax-benefits-provides-little",
    source: "Tax Policy Center",
  },
  {
    title: "DC child tax credit updates (local)",
    summary:
      "DC has enacted/updated child tax credit policy with details that vary by tax year and eligibility—worth checking if you file in DC.",
    dateLabel: "DC (recent)",
    href: "https://www.dcfpi.org/all/dc-tax-credits-for-households-with-low-incomes-will-reduce-child-poverty-by-one-fifth/",
    source: "DC Fiscal Policy Institute",
  },
   {
    title: "General tax updates & reminders",
    summary:
      "Tax rules and credits can change year to year. We’ll keep this section updated with practical reminders for individuals and small businesses.",
    dateLabel: "Ongoing",
    href: "https://www.irs.gov/newsroom",
    source: "IRS Newsroom",
  },
  {
    title: "Credits & deductions vary by situation",
    summary:
      "Eligibility often depends on income, filing status, dependents, and state rules. Reach out if you want guidance based on your situation.",
    dateLabel: "Always",
    href: "https://www.irs.gov/credits-deductions-for-individuals",
    source: "IRS",
  },
  {
    title: "Track IRS guidance in one place",
    summary:
      "Official forms, publications, and instructions are available directly from the IRS website.",
    dateLabel: "Reference",
    href: "https://www.irs.gov/forms-pubs",
    source: "IRS Forms & Pubs",
  },
];
