import { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const { data } = await API.get("/tasks");
        setTasks(data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="card" style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 className="animate-scale-up">Today's Focus</h2>

            <div style={{ textAlign: "left" }}>
                <h3 style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: "12px", color: "#64748b", fontSize: "1.1rem" }}>Daily Quests</h3>
                {tasks.length === 0 ? (
                    <p style={{ color: "#888", textAlign: "center", padding: "40px" }}>No tasks for today. Feeling fresh?</p>
                ) : (
                    tasks.map(task => (
                        <div key={task._id} style={{
                            background: "#f1f5f9",
                            padding: "20px",
                            borderRadius: "16px",
                            margin: "12px 0",
                            border: "1px solid #e2e8f0",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }} className="hover:shadow-md hover:-translate-y-1">
                            <h4 style={{ margin: "0", color: "#1e293b" }}>{task.title}</h4>
                            <span style={{
                                fontSize: "0.8rem",
                                background: task.status === "completed" ? "#2ecc71" : "#f39c12",
                                padding: "4px 10px",
                                borderRadius: "8px",
                                color: "white",
                                fontWeight: "bold"
                            }}>
                                {task.status}
                            </span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard;