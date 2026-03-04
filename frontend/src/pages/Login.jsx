import { useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const { data } = await API.post("/auth/login", { email, password });
            login(data);
            navigate("/dashboard");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed. Check your email and password.");
        }
    };

    return (
        <div className="card">
            <h2>Welcome Back</h2>
            {error && <p style={{ color: "#ef4444", background: "rgba(239, 68, 68, 0.05)", padding: "12px", border: "1px solid rgba(239, 68, 68, 0.1)", borderRadius: "10px", fontSize: "0.9rem" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" style={{ width: "100%", marginTop: "15px" }}>Login</button>
            </form>
            <p style={{ marginTop: "24px", color: "#64748b", fontSize: "0.95rem" }}>
                Don't have an account? <Link to="/register" style={{ color: "#6366f1", textDecoration: "none", fontWeight: "700" }}>Sign Up</Link>
            </p>
        </div>
    );
};

export default Login;