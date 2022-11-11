import { useNavigate } from "react-router-dom";

import verify from "../../../assets/verify.svg";
import back from "../../../assets/back.svg";

export const Verify = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="mx-auto bg-white rounded-md my-[5rem] text-center max-w-[30rem] w-[50%] h-[20rem] p-2 flex flex-col gap-2 items-center justify-center">
                    <img src={verify} alt="verify logo" />
                    <p className="text-lg font-medium">Your email address has been verified.</p>
                    <p className="inline ">Go to Dashboard <img src={back} alt="go to dashboard" className="inline" onClick={() => navigate("/")} /></p>
            </div>
        </div>
    );
};