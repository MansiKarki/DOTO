import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "student"
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await API.post("/auth/register", formData);
            alert("Registration successful! Please login.");
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="card">
            <h2>Join DOTO</h2>
            {error && <p style={{ color: "#ff4d4d", background: "rgba(255, 77, 77, 0.1)", padding: "10px", borderRadius: "8px" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Full Name" onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Create Password" onChange={handleChange} required />
                <select name="role" onChange={handleChange} style={{ padding: "12px", borderRadius: "8px", margin: "10px 0" }}>
                    <option value="student">Student</option>
                    <option value="leader">Leader</option>
                    <option value="founder">Founder</option>
                    <option value="personal">Personal Account</option>
                </select>
                <button type="submit" style={{ width: "100%", marginTop: "10px" }}>Create Account</button>
            </form>
            <p style={{ marginTop: "20px", color: "#aaa" }}>
                Already have an account? <Link to="/" style={{ color: "#646cff", textDecoration: "none", fontWeight: "600" }}>Login</Link>
            </p>
        </div>
    );
};

export default Register;
