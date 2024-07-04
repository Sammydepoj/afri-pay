/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableComponent } from "../../common/components/table-component";
import Header from "../../common/components/Header";
import { ColumnProps } from "antd/es/table";
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAllGlobalKey } from "../../store";
import CreateUserModal from "./createUserModal";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../common/constants";

type TableDataTypes = {
  sn: string;
  email: string;
};
const UserMgt = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.global;
  });
  const navigate = useNavigate();
  const column: ColumnProps<TableDataTypes>[] = [
    {
      title: "Serial number",
      ellipsis: true,
      key: "1",
      render(_: any, record: TableDataTypes) {
        return (
          <span className="flex items-center gap-2 text-center">
            {record.sn}
          </span>
        );
      },
    },
    {
      title: "Email",
      ellipsis: true,
      key: "2",
      render(_: any, record: TableDataTypes) {
        return (
          <span className="grid place-content-start text-center">
            {record.email}
          </span>
        );
      },
    },
  ];
  const dataSource = [
    {
      sn: "67896566",
      email: "user@user.com",
    },
    {
      sn: "67896566",
      email: "user@user.com",
    },
    {
      sn: "67896566",
      email: "user@user.com",
    },
    {
      sn: "67896566",
      email: "user@user.com",
    },
    {
      sn: "67896566",
      email: "user@user.com",
    },
  ];
  return (
    <div>
      <Header />
      {state.showAddUserModal && <CreateUserModal />}
      <div className="flex items-center justify-between px-16 my-8">
        <Button
          className="py-6"
          onClick={() => {
            navigate(ROUTE.DASHBOARD);
          }}
        >
          Go back
        </Button>
        <Button
          className="py-6 bg-[#374D41] hover:!bg-[#374D41] text-white hover:!text-white"
          onClick={() => {
            dispatch(setAllGlobalKey({ ...state, showAddUserModal: true }));
          }}
        >
          + Create User
        </Button>
      </div>
      <div className="max-w-[30rem] mx-auto">
        <TableComponent
          dataSource={dataSource}
          loading={false}
          column={column}
        />
      </div>
    </div>
  );
};

export default UserMgt;
