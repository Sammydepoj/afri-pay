import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { PageModal } from "../../common/components/modal";
import { setAllGlobalKey } from "../../store";

const DownloadModal = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.global;
  });
  const downloadData = [
    { type: "Amount", value: " ₦14,000.00" },
    { type: "Terminal ID", value: " TIDI43532354" },
    { type: "Transaction date", value: "2 Jul, 2024" },
    { type: "Time", value: " 13:13pm" },
    { type: "STAN", value: " 54734" },
    { type: "Masked PAN", value: " 4548***3434" },
    { type: "Status", value: "Successful" },
    { type: "Response Code", value: "00" },
  ];
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
      <h5 className="text-lg font-[ibm-bold]">Transaction Details</h5>
      <div className="bg-[#F9FBF9] my-4 p-4 flex flex-col gap-4 rounded-lg">
        {downloadData?.map((item, index) => (
          <span className="flex items-center justify-between" key={index}>
            <p className="text-[#284E32] text-sm font-[ibm-medium]">
              {item.type}
            </p>
            <p className="text-[#284E32] text-base font-[ibm-semibold]">
              {item.value}
            </p>
          </span>
        ))}
      </div>
    </PageModal>
  );
};

export default DownloadModal;
