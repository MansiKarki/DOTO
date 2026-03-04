export const detectBurnout = (tasks) => {
    const postponed = tasks.filter(t => t.status === "postponed");
    if (postponed.length > 5) return true;
    return false;
};