import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { PageModal } from "../../common/components/modal";
import { setAllGlobalKey } from "../../store";
import { Button, Form, Input } from "antd";

const CreateUserModal = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.global;
  });
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
        className="grid gap-7 "
        requiredMark="optional"
      >
        <Form.Item
          name={"email"}
          label={
            <span className="text-[#151414] font-[ibm-medium] text-sm">
              Email
            </span>
          }
          rules={[{ required: true, message: "Email address is required" }]}
        >
          <Input placeholder="Enter your email" />
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
          className="bg-[#374D41] hover:!bg-[#374D41] !text-white py-6 font-[ibm-medium] "
        >
          Add User
        </Button>
      </Form>
    </PageModal>
  );
};

export default CreateUserModal;
