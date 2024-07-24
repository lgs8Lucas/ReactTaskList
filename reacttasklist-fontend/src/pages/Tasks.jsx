import React from "react";
import { useDatabase } from "../hooks/useDatabase";
import { dbUrl } from "../data/config";
import TaskListitem from "../components/TaskListitem";

const url = dbUrl + "/tasks";

const Tasks = () => {
  const { data, httpCallMethod, loading, error } = useDatabase(url);
  return (
    <main className="tasks">
      <h2>Tasks</h2>
      <ul>
        {data && data.map(task => <TaskListitem  key={task.id} {...task}/>)}
      </ul>
    </main>
  );
};

export default Tasks;
