import { useContext } from "react";
import TasksStore from "../context/store";
import PageLayout from "../components/PageLayout";

const Upcomming = () => {
  const { upcoming } = useContext(TasksStore);
  return <PageLayout pageData={upcoming} title="Upcomming" />;
};

export default Upcomming;
