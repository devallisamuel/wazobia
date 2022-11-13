import { useNavigate } from "react-router-dom";
import { parseUser } from "services/services";

export const Header = () => {
    const navigate = useNavigate();

    function handleClick () {
        const user = parseUser(localStorage.getItem("user"));
        navigate("/verify");
    }
    return (
      <>
        <div className="w-full bg-yellow-200 text-center">
          <p className="text-center text-sm inline">
            You have not verified your email address. Click <span className="text-blue-400" onClick={handleClick}>here</span> to
            resend verification link.
          </p>
        </div>
      </>
    );
};