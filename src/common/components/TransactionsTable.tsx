/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dropdown, Input } from "antd";
import { ColumnProps } from "antd/es/table";
import { TableComponent } from "./table-component";
import more from "../../assets/svg/more-action.svg";
import copy from "../../assets/svg/copy-icon.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAllGlobalKey } from "../../store";
import DownloadModal from "../../views/dashboard/DownloadModal";
import SearchIcon from "../../assets/icons/SearchIcon";

type TableDataTypes = {
  referenceNumber: string;
  amount: string;
  terminalId: string;
  maskedPan: string;
  date: string;
  status: string;
};

const TransactionsTable = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.global;
  });
  const column: ColumnProps<TableDataTypes>[] = [
    {
      title: "Reference number",
      ellipsis: true,
      key: "1",
      render(_: any, record: TableDataTypes) {
        return (
          <span className="flex items-center gap-2 text-center">
            {record.referenceNumber}
            <img src={copy} className="cursor-pointer" />
          </span>
        );
      },
    },
    {
      title: "Amount",
      ellipsis: true,
      key: "2",
      render(_: any, record: TableDataTypes) {
        return (
          <span className="grid place-content-start text-center">
            {record.amount}
          </span>
        );
      },
    },
    {
      title: "Masked Pan",
      key: "4",
      ellipsis: true,
      render(_: any, record: TableDataTypes) {
        return (
          <span className="grid place-content-start text-center">
            <p>{record.terminalId}</p>
            <p className="text-[#656565]">{record.maskedPan}</p>
          </span>
        );
      },
    },
    {
      title: "Date",
      key: "5",
      ellipsis: true,
      render(_: any, record: TableDataTypes) {
        return (
          <div className="grid place-content-center text-center">
            <p>{record.date?.split("T")[0].replaceAll("-", "/")}</p>
            <p>{record.date?.split("T")[1].split("+")[0].split(".")[0]}</p>
          </div>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "",
      ellipsis: true,
      key: "3",
      render(_: any, record: TableDataTypes) {
        return (
          <div className="flex items-center ">
            <p
              className={`text-center ${
                record?.status?.toLowerCase() === "successful"
                  ? "text-[#374D41]"
                  : "text-[#FF291F]"
              }`}
            >
              {record.status}
            </p>
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "",
      key: "6",
      fixed: "right",
      width: "100px",
      render: () => {
        return (
          <Dropdown
            placement="top"
            trigger={["hover"]}
            menu={{
              items: [
                {
                  key: "1",
                  label: (
                    <button
                      onClick={() => {
                        dispatch(
                          setAllGlobalKey({ ...state, showDownloadModal: true })
                        );
                      }}
                      className="w-20 flex z-50 items-center justify-start text-[1rem] gap-2"
                    >
                      Download
                    </button>
                  ),
                },
              ],
            }}
          >
            <button>
              <img src={more} alt="" />
            </button>
          </Dropdown>
        );
      },
    },
  ];
  const dataSource = [
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Successful",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Failed",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Successful",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Failed",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Successful",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Failed",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Successful",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Failed",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Successful",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Failed",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Successful",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Failed",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Successful",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Failed",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Successful",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Failed",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Successful",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Failed",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Successful",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Failed",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Successful",
    },
    {
      referenceNumber: "NGX514367896566",
      amount: "₦ 14,000 .00",
      terminalId: "227345TID",
      maskedPan: "5143**********6566",
      date: "2024-05-18T17:29:39.733+00:00",
      status: "Failed",
    },
  ];
  return (
    <div className="mx-16">
      {state.showDownloadModal && <DownloadModal />}
      <div className="border-3 mt-4">
        <Input addonBefore={<SearchIcon />} className=" max-w-[20rem]" />
      </div>
      <TableComponent dataSource={dataSource} loading={false} column={column} />
    </div>
  );
};

export default TransactionsTable;
