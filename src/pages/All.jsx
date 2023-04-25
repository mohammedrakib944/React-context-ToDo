import AddTasksBtn from "../components/AddTasksBtn";
import Tasks from "../components/Tasks";
import TasksView from "../components/TasksView";
import { useContext } from "react";
import TasksStore from "../context/store";

const All = () => {
  const { tasks } = useContext(TasksStore);
  return (
    <div>
      <div className="grid gap-4 lg:gap-12 lg:grid-cols-2">
        <div className="">
          <h2 className="text-3xl font-bold uppercase mb-2">TODAY</h2>
          <br />
          <AddTasksBtn />
          <br />
          {tasks.length > 0 ? (
            tasks.map((item, index) => <Tasks key={index} data={item} />)
          ) : (
            <p className="ml-1 font-semibold text-error">No tasks found!</p>
          )}
        </div>
        <div>
          <TasksView />
        </div>
      </div>
    </div>
  );
};

export default All;
