import API from "../services/api";

const MoodSelector = ({ refreshTasks }) => {

    const setMood = async (mood) => {
        try {
            await API.post("/mood", { mood });
            refreshTasks();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
            <button
                onClick={() => setMood("burnout")}
                style={{
                    background: "rgba(231, 76, 60, 0.2)",
                    color: "#e74c3c",
                    border: "1px solid rgba(231, 76, 60, 0.4)"
                }}
            >
                😵 Burnout
            </button>
            <button
                onClick={() => setMood("normal")}
                style={{
                    background: "rgba(52, 152, 219, 0.2)",
                    color: "#3498db",
                    border: "1px solid rgba(52, 152, 219, 0.4)"
                }}
            >
                😌 Normal
            </button>
            <button
                onClick={() => setMood("high")}
                style={{
                    background: "rgba(46, 204, 113, 0.2)",
                    color: "#2ecc71",
                    border: "1px solid rgba(46, 204, 113, 0.4)"
                }}
            >
                ⚡ High
            </button>
        </div>
    );
};

export default MoodSelector;