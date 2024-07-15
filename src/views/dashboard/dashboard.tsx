/* eslint-disable @typescript-eslint/no-explicit-any */
import TransactionIncrease from "../../assets/icons/TransactionIncrease";
import TransactionGrowthRate from "../../assets/icons/TransactionGrowthRate";
import Header from "../../common/components/Header";
import TotalTransactions from "../../assets/icons/TotalTransactions";
import SuccessfulTransactions from "../../assets/icons/SuccessfulTransactions";
import FailedTransactions from "../../assets/icons/FailedTransactions";
import TransactionsTable from "../../common/components/TransactionsTable";
import { Spin } from "antd";
import useGetTransactionGrowthRate from "../../hooks/useGetTransactionsGrowth";
import useGetTransactionStats from "../../hooks/useGetTransactionsStatistics";
import useGetDashboardStats from "../../hooks/useGetDashboardStats";
import { retrieveUserInfoFromStorage } from "../../common/constants";

const Dashboard = () => {
  const { transactionGrowthRate } = useGetTransactionGrowthRate();
  const { transactionStats } = useGetTransactionStats();
  const { dashboardStatistics: successfulTransactionsCount } =
    useGetDashboardStats({
      status: "approved",
    });
  const { dashboardStatistics: failedTransactionsCount } = useGetDashboardStats(
    {
      status: "declined",
    }
  );

  const cardData = [
    {
      title: "Transaction Growth Rate",
      amount: transactionGrowthRate?.data?.data,
      icon: <TransactionGrowthRate />,
      icon2: <TransactionIncrease />,
      otherText: "Last 24 hours",
    },
    {
      title: "Total Transactions",
      amount: transactionStats?.data?.data,
      icon: <TotalTransactions />,
      icon2: <TransactionIncrease />,
    },
    {
      title: "Successful transactions",
      amount: successfulTransactionsCount?.data?.data?.totalCount,
      icon: <SuccessfulTransactions />,
    },
    {
      title: "Failed transactions",
      amount: failedTransactionsCount?.data?.data?.totalCount,
      icon: <FailedTransactions />,
    },
  ];
  const { userDetails } = retrieveUserInfoFromStorage();

  return (
    <div>
      <Header />
      <div className="p-16">
        <p className="text-3xl font-[ibm-semibold]">
          Welcome back, {userDetails?.firstName}.
        </p>
        <p className="text-[#656565] text-base font-[ibm-medium]">
          Manage and get the records of your pos transactions.
        </p>
      </div>
      <Spin
        spinning={
          transactionGrowthRate.isLoading ||
          transactionGrowthRate.isFetching ||
          transactionStats.isLoading ||
          transactionStats.isFetching
        }
      >
        <div className="px-16 flex items-center gap-6 overflow-x-auto justify-between pb-4">
          {cardData.map((item, index) => (
            <div
              className="border border-[#DEDFEC] rounded-xl max-w-[292px] w-full p-6"
              key={index}
            >
              <span className="flex gap-2 items-center">
                {item.icon}{" "}
                <p className="text-base font-[ibm-bold] whitespace-nowrap">
                  {item.title}
                </p>
              </span>
              <span className="flex justify-between relative">
                <span className="flex gap-2 mt-4 ">
                  <p className="text-[#1E1E1E] font-[ibm-semibold] text-3xl ">
                    {item.amount}
                  </p>
                  {item.icon2}{" "}
                </span>
                <p className="text-[#656565] absolute bottom-0 right-0">
                  {item.otherText}
                </p>
              </span>
            </div>
          ))}
        </div>
      </Spin>
      <TransactionsTable />{" "}
    </div>
  );
};

export default Dashboard;
