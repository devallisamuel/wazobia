 import { useNavigate } from "react-router-dom";

 export const Navbar = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        navigate("/");
    };

    return (
        <div className="w-full bg-white px-4 h-[4rem] flex justify-between items-center">
            <p className="font-medium text-lg">Dashboard</p>
        </div>
    );
};