import { useGetDataQuery } from "../store";
import { apiEndpoints } from "../store/apiEndpoints";

const useGetAllUsers = () => {
  const allUsers = useGetDataQuery({
    getUrl: `${apiEndpoints.dashboard.getAllUsers}`,
  });

  return { allUsers };
};

export default useGetAllUsers;
