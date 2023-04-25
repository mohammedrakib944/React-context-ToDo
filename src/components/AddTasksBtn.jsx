import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useContext } from "react";
import TasksStore from "../context/store";
import moment from "moment/moment";

const AddTasksBtn = () => {
  const { tasks, addTasks, deleteAllTasks } = useContext(TasksStore);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState("personal");
  const [date, setDate] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    const NextId = tasks?.length + 1;
    const sendingData = {
      id: NextId,
      title,
      description: desc,
      list,
      date,
      isDone: false,
    };

    if (tasks.length >= 10) {
      toast("Please finish Older Tasks!", {
        icon: "⚠️",
      });
      return;
    }

    addTasks(sendingData);
    toast.success("Task Added!");
    document.getElementById("closeModal").click();
    setTitle("");
    setDesc("");
    setList("personal");
    setDate(moment(new Date()).format("YYYY-MM-DD"));
  };

  useEffect(() => {
    const date = new Date();
    setDate(moment(date).format("YYYY-MM-DD"));
  }, []);

  const handleDate = (e) => {
    let time = e.target.value;
    setDate(time);
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to Delete?")) {
      deleteAllTasks();
      toast.success("All Deleted!");
    } else {
      return;
    }
  };

  return (
    <>
      <Toaster />
      <label
        htmlFor="my-modal"
        className="w-full cursor-pointer flex items-center gap-2 py-3 px-5 rounded-lg text-gray-400 hover:text-gray-700 border hover:border-gray-500/60 font-semibold uppercase text-sm"
      >
        <AiOutlinePlus />
        Add new Tasks
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">ADD NEW TASK</h3>
          <form onSubmit={handleAddTask}>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-4 mt-4 focus:outline-cyan-500 border rounded-lg"
              />
              <textarea
                type="text"
                placeholder="Deacription...(Optional)"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="p-4 mt-2 focus:outline-cyan-500 border rounded-lg"
              />
              <div>
                <p className="mt-2">List</p>
                <select
                  onChange={(e) => setList(e.target.value)}
                  value={list}
                  className="select w-full mb-4 mt-2 select-bordered"
                >
                  <option value="personal">Personal</option>
                  <option value="project">Project</option>
                </select>
              </div>
              <p>Due Date</p>
              <input
                type="date"
                value={date}
                onChange={handleDate}
                className="focus:outline-cyan-500 p-2 border mt-2 rounded-lg"
              />
            </div>
            <div className="modal-action">
              <button
                type="submit"
                className="btn bg-cyan-500 border-none rounded-xl"
              >
                ADD
              </button>
              <label
                id="closeModal"
                htmlFor="my-modal"
                className="btn rounded-xl"
              >
                Cancle
              </label>
            </div>
          </form>
        </div>
      </div>

      {tasks.length > 0 && (
        <button
          onClick={handleDelete}
          className="btn btn-outline border-gray-500/20 rounded-md gap-2 btn-sm my-4"
        >
          <AiOutlineDelete /> Delete All
        </button>
      )}
    </>
  );
};

export default AddTasksBtn;
