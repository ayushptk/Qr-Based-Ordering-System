import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

export const lineChartData = {
  labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  datasets: [
    {
      label: 'Income',
      data: [8000, 12000, 10000, 15000, 16580, 14000, 18000, 20000],
      borderColor: '#F97316', // orange-500
      backgroundColor: 'rgba(249, 115, 22, 0.3)',
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
    {
      label: 'Expense',
      data: [5000, 7000, 6000, 8000, 7500, 9000, 8500, 9000],
      borderColor: '#374151', // gray-700
      backgroundColor: 'rgba(81, 55, 55, 0.3)',
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
};

export const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#374151', // gray-700
        font: { size: 14 },
      },
    },
    tooltip: {
      mode: 'index',
      intersect: false,
      backgroundColor: '#111827', // gray-900
      titleColor: '#F97316', // orange-500
      bodyColor: '#F9FAFB', // gray-50
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: '#6B7280', // gray-500
        font: { size: 12 },
      },
      grid: {
        color: '#E5E7EB', // gray-200
      },
    },
    x: {
      ticks: {
        color: '#6B7280', // gray-500
        font: { size: 12 },
      },
      grid: {
        display: false,
      },
    },
  },
};

export const donutChartData = {
  labels: ['Chicken Momo', 'Crunchy Burger', 'Dessert', 'Omlete Noodles'],
  datasets: [
    {
      data: [30, 25, 25, 20],
      backgroundColor: ['#F97316', '#FBBF24', '#FCD34D', '#FEE2E2'], // orange shades
      borderWidth: 0,
    },
  ],
};

export const donutChartOptions = {
  cutout: '70%',
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#374151', // gray-700
        font: { size: 14 },
        boxWidth: 12,
        padding: 20,
      },
    },
    tooltip: {
      backgroundColor: '#111827',
      titleColor: '#F97316',
      bodyColor: '#F9FAFB',
    },
  },
};

export const barChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Orders',
      data: [120, 140, 130, 185, 150, 140, 130],
      backgroundColor: [
        '#FBBF24', // yellow-400 for all except Thu
        '#FBBF24',
        '#FBBF24',
        '#F97316', // orange-500 for Thu highlight
        '#FBBF24',
        '#FBBF24',
        '#FBBF24',
      ],
      borderRadius: 6,
      maxBarThickness: 40,
    },
  ],
};

export const barChartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#111827',
      titleColor: '#F97316',
      bodyColor: '#F9FAFB',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: '#6B7280',
        font: { size: 12 },
      },
      grid: {
        color: '#E5E7EB',
      },
    },
    x: {
      ticks: {
        color: '#6B7280',
        font: { size: 12 },
      },
      grid: {
        display: false,
      },
    },
  },
};
