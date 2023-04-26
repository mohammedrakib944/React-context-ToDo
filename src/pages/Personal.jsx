import { useContext } from "react";
import TasksStore from "../context/store";
import PageLayout from "../components/PageLayout";

const Personal = () => {
  const { personal } = useContext(TasksStore);

  return <PageLayout pageData={personal} title="Personal" />;
};

export default Personal;
