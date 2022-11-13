 import { useNavigate } from "react-router-dom";
 import Dropdown from "react-bootstrap/Dropdown";

 import { parseUser } from "services/services";

 export const Navbar = () => {
    const navigate = useNavigate();
    const user = parseUser(localStorage.getItem("user"));

    const onLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
      <div className="w-full bg-white px-4 h-[4rem] flex justify-between items-center">
        <p className="font-medium text-lg">Dashboard</p>
        <Dropdown>
          <Dropdown.Toggle variant="mute" id="dropdown-basic">
            {user?.user?.first_name} {user?.user?.last_name}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item  onClick={onLogout}>Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
};