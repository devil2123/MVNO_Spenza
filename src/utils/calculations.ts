import { MVNOInputs, MonthlyProjection } from '../types';

export function calculateProjections(inputs: MVNOInputs): MonthlyProjection[] {
  const projections: MonthlyProjection[] = [];
  let currentSubscribers = inputs.initialSubscribers;
  let cumulativeProfit = -inputs.upfrontCosts;
  const profitPerUser = inputs.arpu - inputs.acpu;

  for (let month = 1; month <= inputs.projectionMonths; month++) {
    // Calculate subscriber changes
    const churnedSubscribers = Math.floor(currentSubscribers * inputs.churnRate);
    const newSubscribers = Math.floor(currentSubscribers * inputs.monthlyGrowthRate);
    currentSubscribers = currentSubscribers - churnedSubscribers + newSubscribers;

    // Calculate revenue
    const monthlyRevenue = currentSubscribers * inputs.arpu;

    // Calculate costs
    const totalCosts = inputs.monthlyOperatingExpenses + (currentSubscribers * inputs.acpu);

    // Calculate profit
    const monthlyProfit = monthlyRevenue - totalCosts;
    cumulativeProfit += monthlyProfit;

    projections.push({
      month,
      subscribers: currentSubscribers,
      revenue: monthlyRevenue,
      costs: totalCosts,
      profit: monthlyProfit,
      cumulativeProfit,
      profitPerUser
    });
  }

  return projections;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(number: number): string {
  return new Intl.NumberFormat('en-US').format(Math.round(number));
}
