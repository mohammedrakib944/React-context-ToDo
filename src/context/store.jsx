import { createContext, useEffect, useState } from "react";
import moment from "moment/moment";
import { Task } from "./data";
const TasksStore = createContext();

export const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(Task);
  const [upcoming, setUpcoming] = useState([]);
  const [today, setToday] = useState([]);
  const [personal, setPersonal] = useState([]);
  const [project, setProject] = useState([]);
  const [singleTask, setSingleTasks] = useState({});

  // add new item
  const addTasks = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  // delete all tasks
  const deleteAllTasks = () => {
    setTasks([]);
    setToday([]);
    setUpcoming([]);
  };

  // delete single tasks
  const deleteByid = (id) => {
    if (tasks) {
      const newTasks = tasks.filter((val) => val.id !== id);
      setTasks(newTasks);
    }
  };

  // toggle checked
  const toggleCheckd = (id) => {
    if (!tasks) return {};
    const newTasks = tasks.map((val) => {
      if (val.id === id) {
        return { ...val, isDone: !val.isDone };
      } else {
        return val;
      }
    });
    setTasks(newTasks);
  };

  // upcomming filter
  const upcommingFilter = () => {
    if (!tasks) return {};
    const newTasks = tasks.filter(
      (val) => val.date > moment(new Date()).format("YYYY-MM-DD")
    );
    setUpcoming(newTasks);
  };

  // Today filter
  const todayFilter = () => {
    if (!tasks) return {};
    const newTasks = tasks.filter(
      (val) => val.date === moment(new Date()).format("YYYY-MM-DD")
    );
    setToday(newTasks);
  };

  // personal filter
  const personalFilter = () => {
    if (!tasks) return {};
    const newTasks = tasks.filter((val) => val.list === "personal");
    setPersonal(newTasks);
  };

  // Project filter
  const projectFilter = () => {
    if (!tasks) return {};
    const newTasks = tasks.filter((val) => val.list === "project");
    setProject(newTasks);
  };

  // Update Tasks
  const upDateById = (id, updateData) => {
    if (!tasks) return {};
    const newTasks = tasks.map((val) => (val.id === id ? updateData : val));
    setTasks(newTasks);
  };

  useEffect(() => {
    // set Upcomming
    upcommingFilter();

    // today Filter
    todayFilter();

    // personal filter
    personalFilter();

    // project Filter
    projectFilter();
  }, [tasks]);

  const contextValues = {
    tasks,
    upcoming,
    today,
    personal,
    project,
    singleTask,
    addTasks,
    setTasks,
    setSingleTasks,
    toggleCheckd,
    upDateById,
    deleteAllTasks,
    deleteByid,
    upcommingFilter,
    todayFilter,
  };

  return (
    <TasksStore.Provider value={contextValues}>{children}</TasksStore.Provider>
  );
};

export default TasksStore;
