import { useEffect, useState } from "react";
import API from "../services/api";

const Progress = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const { data } = await API.get("/tasks");
                setTasks(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchTasks();
    }, []);

    const completed = tasks.filter(t => t.status === "completed").length;
    const total = tasks.length;
    const percent = total ? (completed / total) * 100 : 0;

    return (
        <div className="card" style={{ maxWidth: "500px" }}>
            <h2>Success Metric</h2>

            <div style={{ position: "relative", padding: "20px 0" }}>
                <p style={{ fontSize: "1.2rem", color: "#888", marginBottom: "15px" }}>You've accomplished:</p>
                <h3 style={{ fontSize: "3.5rem", color: "#646cff", margin: "10px 0" }}>{percent.toFixed(0)}%</h3>
                <p style={{ fontSize: "1rem", color: "#aaa" }}>{completed} out of {total} items checked off.</p>

                <div style={{
                    marginTop: "30px",
                    width: "100%",
                    height: "12px",
                    background: "#f1f5f9",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0"
                }}>
                    <div style={{
                        width: `${percent}%`,
                        height: "100%",
                        background: "linear-gradient(90deg, #646cff, #a251ff)",
                        boxShadow: "0 0 15px rgba(100, 108, 255, 0.4)",
                        transition: "width 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                    }} />
                </div>
            </div>
        </div>
    );
};

export default Progress;