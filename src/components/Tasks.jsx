import { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useContext } from "react";
import TasksStore from "../context/store";
import doneMp3 from "../assets/audio/done.mp3";
import moment from "moment";

const Tasks = ({ data }) => {
  const { setSingleTasks, toggleCheckd } = useContext(TasksStore);
  const [isPast, setIsPast] = useState(false);

  let audio = new Audio(doneMp3);

  const singleTasksHandler = () => {
    if (data) {
      setSingleTasks(data);
    }
  };

  const handleChecked = (id) => {
    if (!data?.isDone) {
      audio.play();
    }
    toggleCheckd(id);
  };

  useEffect(() => {
    if (moment(new Date()).format("YYYY-MM-DD") > data?.date) {
      setIsPast(true);
    }
  }, [data]);

  return (
    <div
      onClick={singleTasksHandler}
      className="flex items-center justify-between px-3 py-3 mb-2 cursor-pointer group rounded-lg border border-gray-100 shadow"
    >
      <p
        className={
          isPast
            ? "w-1 h-[40px] mr-3 rounded bg-error"
            : "w-1 h-[40px] mr-3 rounded bg-success"
        }
      ></p>
      <input
        type="checkbox"
        checked={data?.isDone}
        onChange={() => handleChecked(data?.id)}
        className="checkbox checkbox-success"
      />
      <div className="w-full pl-3 flex items-center justify-between gap-3 group-hover:text-cyan-500">
        <p
          className={
            data?.isDone
              ? "max-w-[500px] font-semibold line-through"
              : "max-w-[500px] font-semibold"
          }
        >
          {data?.title}
        </p>
        <AiOutlineRight />
      </div>
    </div>
  );
};

export default Tasks;
