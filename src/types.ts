export interface MVNOInputs {
  // Upfront and Operating Costs
  upfrontCosts: number;
  monthlyOperatingExpenses: number;
  
  // Revenue & Subscriber Metrics
  initialSubscribers: number;
  arpu: number;
  acpu: number;
  monthlyGrowthRate: number;
  churnRate: number;
  projectionMonths: number;
}

export interface MonthlyProjection {
  month: number;
  subscribers: number;
  revenue: number;
  costs: number;
  profit: number;
  cumulativeProfit: number;
  profitPerUser: number;
}
