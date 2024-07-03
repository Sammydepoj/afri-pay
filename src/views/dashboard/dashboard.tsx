/* eslint-disable @typescript-eslint/no-explicit-any */
import TransactionIncrease from "../../assets/icons/TransactionIncrease";
import TransactionGrowthRate from "../../assets/icons/TransactionGrowthRate";
import Header from "../../common/components/Header";
import TotalTransactions from "../../assets/icons/TotalTransactions";
import SuccessfulTransactions from "../../assets/icons/SuccessfulTransactions";
import FailedTransactions from "../../assets/icons/FailedTransactions";
import TransactionsTable from "../../common/components/TransactionsTable";

const Dashboard = () => {
  const cardData = [
    {
      title: "Transaction Growth Rate",
      amount: "1,234",
      icon: <TransactionGrowthRate />,
      icon2: <TransactionIncrease />,
      otherText: "Last 24 hours",
    },
    {
      title: "Total Transactions",
      amount: "124,530",
      icon: <TotalTransactions />,
      icon2: <TransactionIncrease />,
    },
    {
      title: "Successful transactions",
      amount: "124,130",
      icon: <SuccessfulTransactions />,
    },
    {
      title: "Failed transactions",
      amount: "400",
      icon: <FailedTransactions />,
    },
  ];

  return (
    <div>
      <Header />
      <div className="p-16">
        <p className="text-3xl font-[ibm-semibold]">Welcome back, User.</p>
        <p className="text-[#656565] text-base font-[ibm-medium]">
          Manage and get the records of your pos transactions.
        </p>
      </div>
      <div className="px-16 flex items-center gap-6 overflow-x-auto">
        {cardData.map((item, index) => (
          <div
            className="border border-[#DEDFEC] rounded-xl max-w-[292px] p-6"
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
      <TransactionsTable />{" "}
    </div>
  );
};

export default Dashboard;
