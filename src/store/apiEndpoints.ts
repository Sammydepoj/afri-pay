export const apiEndpoints = {
  auth: {
    login: "authenticate",
    getUserInfo: "profile/single-user",
    requestOtpForPasswordChange: "authenticate/request-reset-password/",
    resetPassword: "authenticate/reset-password",
  },
  dashboard: {
    getStatistics: "dashboard",
    getTransactionGrowthRate: "dashboard/transaction-growth",
    getDashboardTransactionsStats: "dashboard/numbers-of-all-transactions",
    getAllUsers: "profile",
    addUser: "profile",
    changePassword: "profile/changePassword",
  },
};
