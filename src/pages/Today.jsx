import { useContext } from "react";
import TasksStore from "../context/store";
import PageLayout from "../components/PageLayout";

const Today = () => {
  const { today } = useContext(TasksStore);
  return <PageLayout pageData={today} title="Today" />;
};

export default Today;
