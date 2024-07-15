import { useGetDataQuery } from "../store";
import { apiEndpoints } from "../store/apiEndpoints";

const useGetTransactionGrowthRate = () => {
  const transactionGrowthRate = useGetDataQuery({
    getUrl: `${apiEndpoints.dashboard.getTransactionGrowthRate}`,
  });

  return { transactionGrowthRate };
};

export default useGetTransactionGrowthRate;
