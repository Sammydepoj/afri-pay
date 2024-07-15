import { useGetDataQuery } from "../store";
import { apiEndpoints } from "../store/apiEndpoints";

const useGetTransactionStats = () => {
  const transactionStats = useGetDataQuery({
    getUrl: `${apiEndpoints.dashboard.getDashboardTransactionsStats}`,
  });
  return { transactionStats };
};

export default useGetTransactionStats;
