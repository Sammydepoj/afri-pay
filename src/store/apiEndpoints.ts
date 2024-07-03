/* eslint-disable prettier/prettier */
export const apiEndpoints = {
  auth: {
    login: "authenticate",
    getAdminUser: "adminUser/info",
    resetPassword: "adminUser/changeAdminPassword",
  },
  transaction: {
    dashboardDay: "dashboard/",
    getTransactions: "transactions",
    getTransactionsByProcessorName: "transactions/byProcessor/",
    searchTransaction: "transactions/search",
  },
  processor: {
    getProcessors: "processor",
    cardSchemes: "processor/cardSchemes",
    addProcessor: "processor/add",
    updateProcessor: "processor/update/",
    processorName: "processor/names"
  },
  users: {
    getUsers: "adminUser/all",
    addNewUser: "adminUser/add",
    sendMailForResetPassword: "adminUser/resetAdminPassword/",
    enableAdminUser: "adminUser/enableAdminUser/",
    disableAdminUser: "adminUser/disableAdminUser/",
  },
  terminal: {
    bulkUpload: "terminals/system/bulk",
    addNewTerminal: "terminals/system/",
    getTerminals: "terminals/system?",
    getTerminalProcessor: "terminals/processor?",
    addTerminalProcessor: "terminals/processor/",
    bulktUploadTerminalProcessor: "terminals/processor/bulk/",
    keyExchange: "terminals/processor/keyExchange"
  },
  routing: {
    getDefaultRouting: "routing/default",
    setCustomRouting: "routing/setCustom",
    getCustomRouting: "routing/custom/",
    setDefault: "routing/setDefault",
  },
  logout: "logout",
}
