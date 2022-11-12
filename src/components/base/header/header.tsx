import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    return (
      <>
        <div className="w-full bg-yellow-200 text-center">
          <p className="text-center text-sm inline">
            You have not verified your email address. Click <span className="text-blue-400" onClick={() => navigate("/verify")}>here</span> to
            resend verification link.
          </p>
        </div>
      </>
    );
};