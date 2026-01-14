import { motion } from "framer-motion";
import "./style.css";

export default function App() {
    return (
        <>
            <motion.div
                className="section hero"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="title">Arya Patil</h1>
                <p>Data & Backend Developer · Open Source Contributor</p>
            </motion.div>

            <div className="section">
                <h2>About</h2>
                <p>
                    IT student at VIT Pune passionate about backend, data analytics,
                    machine learning and open source.
                </p>
            </div>

            <div className="section">
                <h2>Projects</h2>
                <div className="cards">
                    <Project title="Sleep Efficiency ML" desc="R² = 0.90 using Random Forest" />
                    <Project title="Global Layoffs SQL" desc="Data analysis using SQL" />
                    <Project title="DineSync" desc="QR ordering system with React + Spring Boot" />
                </div>
            </div>
        </>
    );
}

function Project({ title, desc }) {
    return (
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>{title}</h3>
            <p>{desc}</p>
        </motion.div>
    );
}
