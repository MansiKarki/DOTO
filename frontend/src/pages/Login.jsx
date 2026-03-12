import { useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "member"
    });
    const [error, setError] = useState("");

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const { data } = await API.post("/auth/login", { 
                email: formData.email, 
                password: formData.password 
            });

            // Restrict login to only leader and member
            if (data.role !== "leader" && data.role !== "member") {
                setError("Access denied. Only Leaders and Members can log in.");
                return;
            }

            // Verify selected role matches actual role
            if (data.role !== formData.role) {
                setError(`Login failed. You are registered as a ${data.role}, but selected ${formData.role}.`);
                return;
            }

            login(data);
            navigate("/dashboard");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed. Check your email and password.");
        }
    };


    return (
        <div className="card">
            <h2>Welcome Back</h2>
            <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "20px" }}>
                Enter your details to access the DOTO dashboard.
            </p>

            {error && <p style={{ color: "#ef4444", background: "rgba(239, 68, 68, 0.05)", padding: "12px", border: "1px solid rgba(239, 68, 68, 0.1)", borderRadius: "10px", fontSize: "0.9rem" }}>{error}</p>}
            
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <select 
                    name="role" 
                    value={formData.role}
                    onChange={handleChange} 
                    style={{ 
                        width: "100%",
                        padding: "12px", 
                        borderRadius: "10px", 
                        border: "1px solid #e2e8f0",
                        marginBottom: "15px",
                        fontSize: "0.95rem",
                        background: "#f8fafc"
                    }}
                >
                    <option value="member">Member</option>
                    <option value="leader">Leader</option>
                </select>
                <button type="submit" style={{ width: "100%", marginTop: "5px" }}>Login</button>
            </form>


        </div>
    );
};

export default Login;