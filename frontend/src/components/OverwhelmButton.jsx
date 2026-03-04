import API from "../services/api";

const OverwhelmButton = ({ setTasks }) => {

    const reduceLoad = async () => {
        const { data } = await API.get("/tasks/reduce");
        setTasks(data);
    };

    return (
        <button onClick={reduceLoad}>
            🆘 Reduce My Load
        </button>
    );
};

export default OverwhelmButton;