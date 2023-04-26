import { useContext } from "react";
import TasksStore from "../context/store";
import PageLayout from "../components/PageLayout";

const Project = () => {
  const { project } = useContext(TasksStore);
  return <PageLayout pageData={project} title="Project" />;
};

export default Project;
