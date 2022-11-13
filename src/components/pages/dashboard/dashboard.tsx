import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "components/base/header/header";
import { Navbar } from "components/base/navbar/navbar";
import { Card } from "components/base/card/card";
import { Modals } from "components/base/modal/modal";

import plus from "../../../assets/plus.svg";

import { parseUser } from "services/services";

export const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const user = parseUser(localStorage.getItem("user"));
    debugger;
  useEffect(() => {
    // if (!user) {
    //   navigate("/login");
    // }
  }, []);
  return (
    <>
      <div>
        {user?.user?.email_verification_token && <Header />}
        <Navbar />
        <div className="p-3 flex md:flex-row md:justify-evenly flex-col justify-evenly items-center">
          {new Array(3).fill(0).map((_, index) => (
            <Card name="" description="" key={index} />
          ))}
        </div>
        <Modals
          show={open}
          name=""
          note=""
          setopen={setOpen}
          onHide={() => setOpen(false)}
          update={false}
        />
        <img
          src={plus}
          alt="add or create"
          className="absolute bottom-[5%] right-[5%]"
          onClick={() => setOpen(true)}
        />
      </div>
    </>
  );
};
