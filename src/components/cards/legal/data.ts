export const valueDrivers = [
  'Finance, tax & treasury',
  'Enviroment & public funding',
  'Engineering procurement & real estate',
  'Strategic project & M&A',
  'Government & institution relations',
  'Employment',
  'Corporate',
  'Security & privacy',
];

export const defaultDrivers = [
  'Finance, tax & treasury',
  'Enviroment & public funding',
  'Engineering procurement & real estate',
  'Strategic project & M&A',
  'Government & institution relations',
  'Employment',
];

export const departmentList = [
  'Choose department name',
  'Compliance',
  'Corporate',
  'Department Operation',
  'Employment',
  'Engineering Procurement & Real Estate',
  'Environment & Public Funding',
  'Finance, Tax, Treasury',
  'General Contract & In-Licensing',
  'General Procurement',
  'IP-Trade Secrets / Insurance',
  'Marketing & Advertising',
  'Security & Privacy',
  'Strategic Project & M&A',
  'Government & Institutions Relations',
  'General Contract & In-Licensing',
  'Regulatory, R&D, Quality & B2B',
  'Sales/Distribution & International Markets',
];

export const activitieTable = [
  { totalHours: 14084 },
  { total: 40000000 },
  {
    title: 'Contract',
    hours: [{ total: 13831, complex: 0, routine: 0 }],
  },
  { title: 'Material review', hours: [{ total: 0 }] },
  { title: 'Advisory', hours: [{ total: 2446 }] },
  {
    title: 'Litigation',
    hours: [{ total: 0, complex: 0, routine: 0 }],
  },
  {
    title: 'Procedure',
    hours: [{ total: 11385, complex: 1265, routine: 10120 }],
  },
  { title: 'Trainings', hours: [{ total: 0 }] },
];

export type TotalHours = { totalHours: number };
export type Total = { total: number };
export type Hours = {
  title: string;
  hours: { total: number; complex?: number; routine?: number }[];
};

export interface IDepartmentData {
  department: string;
  employee: string;
  valueDrivers: string[];
  table: Array<TotalHours | Total | Hours>;
}

export const departmentData = [
  {
    department: 'Legal department',
    employee: '7',
    valueDrivers: [
      'Employment',
      'Engineering Procurement & Real Estate',
      'Corporate',
      'Environment & Public Funding',
      'Finance, Tax, Treasury',
      'Strategic Project & M&A',
    ],
    table: [
      { totalHours: 18499 },
      { total: 50475000 },
      {
        title: 'Contract',
        hours: [{ total: 8875, complex: 5329, routine: 3546 }],
      },
      { title: 'Material review', hours: [{ total: 0 }] },
      { title: 'Advisory', hours: [{ total: 8971 }] },
      {
        title: 'Litigation',
        hours: [{ total: 0, complex: 0, routine: 0 }],
      },
      {
        title: 'Procedure',
        hours: [{ total: 0, complex: 0, routine: 0 }],
      },
      { title: 'Trainings', hours: [{ total: 400 }] },
    ],
  },
  {
    department: 'Organizational department',
    employee: '7',
    valueDrivers: ['Corporate', 'Security & privacy'],
    table: [
      { totalHours: 14084 },
      { total: 40000000 },
      {
        title: 'Contract',
        hours: [{ total: 13831, complex: 0, routine: 0 }],
      },
      { title: 'Material review', hours: [{ total: 0 }] },
      { title: 'Advisory', hours: [{ total: 2446 }] },
      {
        title: 'Litigation',
        hours: [{ total: 0, complex: 0, routine: 0 }],
      },
      {
        title: 'Procedure',
        hours: [{ total: 11385, complex: 1265, routine: 10120 }],
      },
      { title: 'Trainings', hours: [{ total: 0 }] },
    ],
  },
  {
    department: 'Compliance',
    employee: '4',
    valueDrivers: ['Compliance'],
    table: [
      { totalHours: 10040 },
      { total: 50475000 },
      {
        title: 'Contract',
        hours: [{ total: 145, complex: 20, routine: 125 }],
      },
      { title: 'Material review', hours: [{ total: 232 }] },
      { title: 'Advisory', hours: [{ total: 2336 }] },
      {
        title: 'Litigation',
        hours: [{ total: 0, complex: 0, routine: 0 }],
      },
      {
        title: 'Procedure',
        hours: [{ total: 1594, complex: 504, routine: 1090 }],
      },
      { title: 'Trainings', hours: [{ total: 406 }] },
    ],
  },
  {
    department: 'In-Licensing',
    employee: '4',
    valueDrivers: ['General Contract & In-Licensing'],
    table: [
      { totalHours: 13409 },
      { total: 350000000 },
      {
        title: 'Contract',
        hours: [{ total: 7084, complex: 5499, routine: 1586 }],
      },
      { title: 'Material review', hours: [{ total: 0 }] },
      { title: 'Advisory', hours: [{ total: 0 }] },
      {
        title: 'Litigation',
        hours: [{ total: 0, complex: 0, routine: 0 }],
      },
      {
        title: 'Procedure',
        hours: [{ total: 6072, complex: 6072, routine: 0 }],
      },
      { title: 'Trainings', hours: [{ total: 0 }] },
    ],
  },
  {
    department: 'Sales Distribution International Markets',
    employee: '5',
    valueDrivers: [
      'Corporate',
      'General Procurement',
      'IP-Trade Secrets / Insurance',
      'Marketing & Advertising',
      'Regulatory, R&D, Quality & B2B',
      'Sales/Distribution & International Markets',
    ],
    table: [
      { totalHours: 253 },
      { total: 25000000 },
      {
        title: 'Contract',
        hours: [{ total: 0, complex: 0, routine: 0 }],
      },
      { title: 'Material review', hours: [{ total: 0 }] },
      { title: 'Advisory', hours: [{ total: 0 }] },
      {
        title: 'Litigation',
        hours: [{ total: 0, complex: 0, routine: 0 }],
      },
      {
        title: 'Procedure',
        hours: [{ total: 0, complex: 0, routine: 0 }],
      },
      { title: 'Trainings', hours: [{ total: 0 }] },
    ],
  },
];
