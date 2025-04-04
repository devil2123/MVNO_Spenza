import { MVNOInputs, MonthlyProjection } from '../types';

export function calculateProjections(inputs: MVNOInputs): MonthlyProjection[] {
  const projections: MonthlyProjection[] = [];
  let currentSubscribers = inputs.initialSubscribers;
  let cumulativeProfit = -(inputs.licenseFees + inputs.itSetupCosts + inputs.initialMarketing);

  for (let month = 1; month <= inputs.projectionMonths; month++) {
    // Calculate subscriber changes
    const churnedSubscribers = Math.floor(currentSubscribers * inputs.churnRate);
    const newSubscribers = Math.floor(currentSubscribers * inputs.monthlyGrowthRate);
    currentSubscribers = currentSubscribers - churnedSubscribers + newSubscribers;

    // Calculate revenue
    const monthlyRevenue = currentSubscribers * inputs.arpu;

    // Calculate costs
    const fixedCosts = inputs.monthlySalaries + inputs.monthlyITSupport + inputs.customerServiceCost;
    const variableCosts = currentSubscribers * (
      inputs.wholesaleNetworkFee +
      inputs.simCardCost +
      inputs.marketingPerSubscriber
    );
    const totalCosts = fixedCosts + variableCosts;

    // Calculate profit
    const monthlyProfit = monthlyRevenue - totalCosts;
    cumulativeProfit += monthlyProfit;

    projections.push({
      month,
      subscribers: currentSubscribers,
      revenue: monthlyRevenue,
      costs: totalCosts,
      profit: monthlyProfit,
      cumulativeProfit
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