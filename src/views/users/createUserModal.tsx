import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { PageModal } from "../../common/components/modal";
import { setAllGlobalKey } from "../../store";
import { Button, Form, Input, Select } from "antd";
import useCreateUser from "../../hooks/useCreateUser";

const CreateUserModal = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.global;
  });
  const { handleCreateUser, handleCreateUserResult } = useCreateUser();
  return (
    <PageModal
      openModal={state.showAddUserModal}
      handleCancel={() => {
        dispatch(setAllGlobalKey({ ...state, showAddUserModal: false }));
      }}
      centered
      modalFooter={null}
    >
      <h5 className="text-lg font-[ibm-bold] mb-4">Add User</h5>
      <Form
        layout="vertical"
        wrapperCol={{ span: 24 }}
        labelCol={{ span: 24 }}
        className="grid  "
        requiredMark="optional"
        onFinish={(e) => {
          handleCreateUser(e);
        }}
      >
        <Form.Item
          name={"firstName"}
          label={
            <span className="text-[#151414] font-[ibm-medium] text-sm">
              First Name
            </span>
          }
          rules={[
            { required: true, message: " First Name address is required" },
          ]}
        >
          <Input placeholder="Enter the user first name" />
        </Form.Item>
        <Form.Item
          name={"lastName"}
          label={
            <span className="text-[#151414] font-[ibm-medium] text-sm">
              Last Name
            </span>
          }
          rules={[
            { required: true, message: " Last Name address is required" },
          ]}
        >
          <Input placeholder="Enter the user last name" />
        </Form.Item>
        <Form.Item
          name={"email"}
          label={
            <span className="text-[#151414] font-[ibm-medium] text-sm">
              Email
            </span>
          }
          rules={[{ required: true, message: "Email address is required" }]}
        >
          <Input placeholder="Enter the user email" />
        </Form.Item>
        <Form.Item
          name={"role"}
          label={
            <span className="text-[#151414] font-[ibm-medium] text-sm">
              Role
            </span>
          }
          rules={[{ required: true, message: "Role is required" }]}
        >
          <Select className="h-[3rem]">
            <Select.Option value={"SUPER_ADMIN"}>Super Admin</Select.Option>
            <Select.Option value={"ADMIN"}>Admin</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={"password"}
          rules={[{ required: true, message: "Password is required" }]}
          label={
            <span className="text-[#151414] font-[ibm-medium] text-sm">
              Password
            </span>
          }
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Button
          htmlType="submit"
          className="bg-[#374D41] hover:!bg-[#374D41] !text-white py-6 font-[ibm-medium]"
          loading={handleCreateUserResult.isLoading}
        >
          Add User
        </Button>
      </Form>
    </PageModal>
  );
};

export default CreateUserModal;
