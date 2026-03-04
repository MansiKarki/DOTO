export const detectBurnout = (tasks) => {

    const postponed = tasks.filter(
        task => task.status === "postponed"
    );

    const overdue = tasks.filter(
        task => task.deadline < new Date() &&
            task.status !== "completed"
    );

    if (postponed.length > 5 || overdue.length > 3) {
        return true;
    }

    return false;
};
