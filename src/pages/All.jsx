import { useContext } from "react";
import TasksStore from "../context/store";
import PageLayout from "../components/PageLayout";

const All = () => {
  const { tasks } = useContext(TasksStore);
  return <PageLayout pageData={tasks} title="All Tasks" />;
};

export default All;
