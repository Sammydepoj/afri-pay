import { useGetDataQuery } from "../store";
import { apiEndpoints } from "../store/apiEndpoints";

type Params = {
  size?: number;
  page?: number;
  status?: string;
  rrn?: string;
  toDate?: string;
  fromDate?: string;
};
const useGetDashboardStats = ({
  size,
  fromDate,
  page,
  rrn,
  status,
  toDate,
}: Params) => {
  const dashboardStatistics = useGetDataQuery({
    getUrl: `${apiEndpoints.dashboard.getStatistics}?size=${
      size ?? 10
    }&fromDate=${fromDate ?? ""}&page=${page ?? 1}&rrn=${rrn ?? ""}&status=${
      status ?? ""
    }&toDate=${toDate ?? ""}`,
  });

  return { dashboardStatistics };
};

export default useGetDashboardStats;
