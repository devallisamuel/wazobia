import { Header } from "components/base/header/header";
import { useState } from "react";
import { Navbar } from "components/base/navbar/navbar";
import { Card } from "components/base/card/card";
import { Modals } from "components/base/modal/modal";

import plus from "../../../assets/plus.svg";

export const Dashboard  = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div>
          <Header />
          <Navbar />
          <div className="p-3">
            <Card name="" description="" />
          </div>
          <Modals
            show={open}
            name=""
            note=""
            setOpen={setOpen}
            onHide={() => setOpen(false)}
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