import { useEffect, useState } from "react";
import API from "../services/api";

const LeaderMode = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const { data } = await API.get("/leader/dashboard");
                setTasks(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchDashboard();
    }, []);

    return (
        <div className="card" style={{ maxWidth: "700px" }}>
            <h2>Leader Dashboard</h2>
            <div style={{ textAlign: "left" }}>
                {tasks.length === 0 ? (
                    <p style={{ color: "#888", textAlign: "center" }}>No team tasks assigned yet.</p>
                ) : (
                    tasks.map(task => (
                        <div key={task._id} style={{
                            background: "#f8fafc",
                            padding: "15px",
                            borderRadius: "12px",
                            margin: "10px 0",
                            border: "1px solid #e2e8f0",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <div>
                                <h4 style={{ margin: "0 0 5px 0" }}>{task.title}</h4>
                                <p style={{ margin: 0, fontSize: "0.85rem", color: "#aaa" }}>
                                    Assigned To: <span style={{ color: "#646cff" }}>{task.assignedTo?.name || "Unassigned"}</span>
                                </p>
                            </div>
                            <span style={{
                                fontSize: "0.8rem",
                                background: task.status === "completed" ? "#2ecc71" : "#f1c40f",
                                padding: "4px 10px",
                                borderRadius: "6px",
                                color: "white",
                                fontWeight: "600"
                            }}>
                                {task.status.toUpperCase()}
                            </span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default LeaderMode;