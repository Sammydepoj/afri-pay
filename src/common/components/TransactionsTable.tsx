/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  DatePicker,
  Dropdown,
  Input,
  Popover,
  notification,
} from "antd";
import { ColumnProps } from "antd/es/table";
import { TableComponent } from "./table-component";
import more from "../../assets/svg/more-action.svg";
import copy from "../../assets/svg/copy-icon.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAllGlobalKey } from "../../store";
import DownloadModal from "../../views/dashboard/DownloadModal";
import SearchIcon from "../../assets/icons/SearchIcon";
import FilterIcon from "../../assets/icons/FilterIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import DownloadIcon from "../../assets/icons/DownloadIcon";
import useGetDashboardStats from "../../hooks/useGetDashboardStats";
import { useState } from "react";
import { copyTextToClipboard } from "../../utils/copyToClipboard";

type TableDataTypes = {
  accountType: string;
  amount: string;
  authorizationCode: string;
  authorizationResponse: string;
  batchNo: string;
  cellInfo: string;
  channelCode: string;
  createdDate: string;
  currencyCode: string;
  customerName: string;
  customerOtherInfo: string;
  dateLocalTransaction: string;
  echoData: string;
  firmwareId: string;
  footer: any;
  gpsInfo: string;
  iccData: string;
  merchantAddress: string;
  merchantId: string;
  merchantName: string;
  mti: string;
  narration: string;
  otherTerminalId: string;
  pan: string;
  paxTransaction: boolean;
  paymentInformation: string;
  paymentMethod: string;
  posConditionCode: string;
  posEntryMode: string;
  processedBy: string;
  processingCode: string;
  refCode: string;
  remoteServerIp: string;
  reportPushed: boolean;
  reportPushedDate: string;
  responseCode: string;
  responseDescription: string;
  revenueCode: string;
  rrn: string;
  searchText: string;
  seqNo: string;
  stan: string;
  systemTime: string;
  terminalId: string;
  timeLocalTransaction: string;
  tmsPushed: boolean;
  tmsPushedDate: any;
  track1: string;
  track2: string;
  tranType: string;
  transTypeCode: string;
  transactionCode: string;
  transactionDate: string;
  transactionId: string;
  transactionStatus: string;
  transactionTime: string;
  channel: any;
};

const TransactionsTable = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.global;
  });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { dashboardStatistics } = useGetDashboardStats({
    fromDate: startDate,
    toDate: endDate,
    rrn: searchQuery,
    status: selectedFilter,
    page: state.page,
    size: state.pageSize,
  });

  const { RangePicker } = DatePicker;
  const column: ColumnProps<TableDataTypes>[] = [
    {
      title: "Reference number",
      ellipsis: true,
      key: "1",
      render(_: any, record: TableDataTypes) {
        return (
          <span className="flex items-center gap-2 text-center">
            {record.rrn}
            <img
              src={copy}
              className="cursor-pointer"
              onClick={() => {
                copyTextToClipboard(record.rrn);
                notification.open({ message: "Copied!", type: "success" });
              }}
            />
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
            ₦{record.amount}
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
            <p className="text-[#656565]">{record.pan}</p>
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
          <div className="">
            <p>{record.createdDate?.split("T")[0].replaceAll("-", "/")}</p>
            <p>
              {record.createdDate?.split("T")[1].split("+")[0].split(".")[0]}
            </p>
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
                record?.transactionStatus?.toLowerCase() === "approved"
                  ? "text-[#374D41]"
                  : "text-[#FF291F]"
              }`}
            >
              {record.transactionStatus}
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
      width: "70px",
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
  const handleDateChange = (dates: any[] | null) => {
    if (dates && dates.length === 2) {
      const startCustomFormat = dates[0]?.format("DD-MM-YYYY");
      const endCustomFormat = dates[1]?.format("DD-MM-YYYY");

      // const startISO = dayjs(startCustomFormat, "DD-MM-YYYY").toISOString();
      // const endISO = dayjs(endCustomFormat, "DD-MM-YYYY").toISOString();
      setStartDate(startCustomFormat);
      setEndDate(endCustomFormat);
    } else {
      setStartDate("");
      setEndDate("");
    }
  };

  const convertToCSV = (objArray: any) => {
    const array =
      typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
    let str = "";

    for (let i = 0; i < array.length; i++) {
      let line = "";
      for (const index in array[i]) {
        if (line !== "") line += ",";

        line += array[i][index];
      }
      str += line + "\r\n";
    }
    return str;
  };
  const downloadCSV = () => {
    const csvData = new Blob(
      [convertToCSV(dashboardStatistics?.data?.data?.transactionDTOS ?? [])],
      { type: "text/csv" }
    );
    const csvURL = URL.createObjectURL(csvData);
    const link = document.createElement("a");
    link.href = csvURL;
    link.download = `${"transactions"}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-4 md:mx-16">
      {state.showDownloadModal && <DownloadModal />}
      <div className="border-3 mt-8 flex items-center justify-between gap-4  mb-4">
        <div className="flex items-center gap-5">
          <Input
            addonBefore={<SearchIcon />}
            placeholder="Search by RRN"
            className=" max-w-[20rem]"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <Popover
            content={
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => {
                    setSelectedFilter("approved");
                  }}
                >
                  Approved
                </button>
                <button
                  onClick={() => {
                    setSelectedFilter("declined");
                  }}
                >
                  Declined
                </button>
              </div>
            }
            placement="bottom"
            trigger={"hover"}
            arrow={false}
          >
            <Button
              icon={
                selectedFilter.length > 1 ? (
                  <button
                    onClick={() => {
                      setSelectedFilter("");
                    }}
                  >
                    X
                  </button>
                ) : (
                  <FilterIcon />
                )
              }
              className="py-6"
            >
              {selectedFilter.length > 1 ? selectedFilter : "Filter By"}
            </Button>
          </Popover>
          {/* <Popover
            content={
              <div className="flex flex-col gap-4">
                <RangePicker />
              </div>
            }
            placement="top"
            trigger={"hover"}
            arrow={false}
          >
            <Button icon={<CalendarIcon />} className="py-6">
              Select dates
            </Button>
          </Popover> */}
          <RangePicker
            suffixIcon={<CalendarIcon />}
            className="py-3"
            placeholder={["Select dates", "Selct dates"]}
            onChange={handleDateChange}
          />
        </div>
        <Popover
          content={
            <div className="flex flex-col gap-4">
              <button onClick={downloadCSV}>This page</button>
              {/* <button>All transactions</button> */}
            </div>
          }
          placement="bottom"
          trigger={"hover"}
          arrow={false}
        >
          <Button
            icon={<DownloadIcon />}
            className="py-6 bg-[#374D41] hover:!bg-[#374D41] text-white hover:!text-white"
          >
            Download
          </Button>
        </Popover>
      </div>
      <TableComponent
        dataSource={dashboardStatistics?.data?.data?.transactionDTOS ?? []}
        loading={
          dashboardStatistics.isLoading || dashboardStatistics.isFetching
        }
        column={column}
        total={dashboardStatistics?.data?.data?.totalCount}
      />
    </div>
  );
};

export default TransactionsTable;
