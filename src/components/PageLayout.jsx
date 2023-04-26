import AddTasksBtn from "../components/AddTasksBtn";
import Tasks from "../components/Tasks";
import TasksView from "../components/TasksView";

const PageLayout = ({ pageData, title }) => {
  return (
    <div>
      <div className="grid gap-4 lg:gap-12 lg:grid-cols-2">
        <div className="">
          <h2 className="text-3xl font-bold uppercase mb-2">{title}</h2>
          <br />
          <AddTasksBtn />
          <br />
          {pageData.length > 0 ? (
            pageData.map((item, index) => <Tasks key={index} data={item} />)
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

export default PageLayout;
