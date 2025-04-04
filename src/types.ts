export interface MVNOInputs {
  // Upfront Costs
  licenseFees: number;
  itSetupCosts: number;
  initialMarketing: number;
  
  // Monthly Operating Expenses
  monthlySalaries: number;
  monthlyITSupport: number;
  customerServiceCost: number;
  
  // Per Subscriber Costs
  wholesaleNetworkFee: number;
  simCardCost: number;
  marketingPerSubscriber: number;
  
  // Revenue & Subscriber Metrics
  arpu: number;
  monthlyGrowthRate: number;
  churnRate: number;
  initialSubscribers: number;
  
  // Time Horizon
  projectionMonths: number;
}

export interface MonthlyProjection {
  month: number;
  subscribers: number;
  revenue: number;
  costs: number;
  profit: number;
  cumulativeProfit: number;
}