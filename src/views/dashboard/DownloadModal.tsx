import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { PageModal } from "../../common/components/modal";
import { setAllGlobalKey } from "../../store";
import { TableDataTypes } from "../../common/components/TransactionsTable";
import DownloadIcon from "../../assets/icons/DownloadIcon";
import { Button } from "antd";
import html2canvas from "html2canvas";
import fileDownload from "js-file-download";
import { useRef } from "react";
import Logo from "../../assets/logo.png";

const DownloadModal = ({
  selectedTransaction,
}: {
  selectedTransaction: TableDataTypes | undefined;
}) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.global;
  });
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (contentRef.current) {
      const canvas = await html2canvas(contentRef.current);
      const dataUrl = canvas.toDataURL("image/png");
      const blob = await fetch(dataUrl).then((res) => res.blob());
      fileDownload(blob, "transaction-details.png");
    }
  };
  return (
    <PageModal
      openModal={state.showDownloadModal}
      handleCancel={() => {
        dispatch(setAllGlobalKey({ ...state, showDownloadModal: false }));
      }}
      modalFooter={null}
      centered
      closable
      modalWith="25rem"
    >
      <div ref={contentRef}>
        <img src={Logo} className="text-center mx-auto mb-3" />
        <h5 className="text-lg font-[ibm-bold]">Transaction Details</h5>
        <div className="bg-[#F9FBF9] my-4 p-4 flex flex-col gap-4 rounded-lg">
          <span className="flex items-center justify-between">
            <p className="text-[#284E32] text-sm font-[ibm-medium]">Amount</p>
            <p className="text-[#284E32] text-base font-[ibm-semibold]">
              ₦
              {new Intl.NumberFormat().format(
                Number(selectedTransaction?.amount)
              )}
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p className="text-[#284E32] text-sm font-[ibm-medium]">
              Terminal ID
            </p>
            <p className="text-[#284E32] text-base font-[ibm-semibold]">
              {selectedTransaction?.terminalId}
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p className="text-[#284E32] text-sm font-[ibm-medium]">
              Transaction date
            </p>
            <p className="text-[#284E32] text-base font-[ibm-semibold]">
              {selectedTransaction?.transactionDate}
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p className="text-[#284E32] text-sm font-[ibm-medium]">Time</p>
            <p className="text-[#284E32] text-base font-[ibm-semibold]">
              {selectedTransaction?.timeLocalTransaction}
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p className="text-[#284E32] text-sm font-[ibm-medium]">STAN</p>
            <p className="text-[#284E32] text-base font-[ibm-semibold]">
              {selectedTransaction?.stan}
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p className="text-[#284E32] text-sm font-[ibm-medium]">
              Masked PAN
            </p>
            <p className="text-[#284E32] text-base font-[ibm-semibold]">
              {selectedTransaction?.pan}
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p className="text-[#284E32] text-sm font-[ibm-medium]">Status</p>
            <p className="text-[#284E32] text-base font-[ibm-semibold]">
              {selectedTransaction?.transactionStatus}
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p className="text-[#284E32] text-sm font-[ibm-medium]">
              Response Code
            </p>
            <p className="text-[#284E32] text-base font-[ibm-semibold]">
              {selectedTransaction?.responseCode}
            </p>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button
          icon={<DownloadIcon />}
          className="py-6 bg-[#374D41] hover:!bg-[#374D41] text-white hover:!text-white"
          onClick={handleDownload}
        >
          Download
        </Button>
      </div>
    </PageModal>
  );
};

export default DownloadModal;
