import { TbListDetails } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useContext } from "react";
import TasksStore from "../context/store";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";

const TasksView = () => {
  const { singleTask, deleteByid, upDateById } = useContext(TasksStore);
  const [onetitle, setOneTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPast, setIsPast] = useState(false);
  const [list, setList] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (singleTask) {
      const { title, description, list, date } = singleTask;
      setOneTitle(title);
      setDescription(description);
      setList(list);
      setDate(date);
    } else {
      toast.error("No data found!");
    }
  }, [singleTask]);

  const handleDate = (e) => {
    let time = e.target.value;
    setDate(time);
  };

  const handleDelete = (id) => {
    deleteByid(id);
  };

  useEffect(() => {
    if (moment(new Date()).format("YYYY-MM-DD") > singleTask?.date) {
      setIsPast(true);
    } else {
      setIsPast(false);
    }
  }, [singleTask]);

  // Handle Update
  const handleUpdate = () => {
    const updatedData = {
      id: singleTask.id,
      title: onetitle,
      description,
      list,
      date,
      isDone: singleTask.isDone,
    };
    upDateById(singleTask.id, updatedData);
    toast.success("Update done!");
  };

  return (
    <>
      <Toaster />

      <div className="lg:border-l sticky top-8 px-3 lg:px-10">
        <p className="flex items-center gap-2 text-xl font-bold uppercase mb-6 mt-2">
          Task <TbListDetails />
        </p>
        <p className="mt-4 font-semibold text-gray-500 mb-2">Time</p>
        {date && (
          <div
            className={
              isPast
                ? "p-4 bg-error text-white font-bold rounded-lg"
                : "p-4 bg-success text-white font-bold rounded-lg"
            }
          >
            {"End " + moment(date).fromNow()}
          </div>
        )}
        <p className="mt-4 font-semibold text-gray-500">Title</p>
        <input
          type="text"
          defaultValue={onetitle}
          onChange={(e) => setOneTitle(e.target.value)}
          className="w-full outline-cyan-500 font-semibold mb-3 text-lg border rounded-lg p-3 mt-2"
        />
        <p className="mt-4 font-semibold text-gray-500">Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="w-full h-[150px] outline-cyan-500 font-semibold mb-3 border rounded-lg p-3 mt-2"
          value={description}
        ></textarea>
        <div className="max-w-[400px] flex justify-between items-center gap-6 py-2 px-1">
          <p className="font-semibold text-gray-500">List</p>
          <select
            defaultValue={list}
            onChange={(e) => setList(e.target.value)}
            className="select w-full max-w-[150px]"
          >
            <option value="personal">Personal</option>
            <option value="project">Project</option>
          </select>
        </div>
        <div className="max-w-[400px] flex justify-between items-center gap-6 py-2 px-1">
          <p className="font-semibold text-gray-500">Due Date</p>
          <input type="date" defaultValue={date} onChange={handleDate} />
        </div>
        <br />
        <button
          onClick={handleUpdate}
          className="btn bg-cyan-500 border-none gap-2 rounded-xl px-5"
        >
          save changes
          <BiEdit />
        </button>
        &nbsp; &nbsp;
        <button
          onClick={() => handleDelete(singleTask?.id)}
          className="btn btn-outline border-gray-300 gap-2 rounded-xl px-5"
        >
          Delete Task <AiFillDelete />
        </button>
      </div>
    </>
  );
};

export default TasksView;
