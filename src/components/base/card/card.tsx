import { useState } from "react";
import { Tcard } from "utility/utility";
import { Modals } from "../modal/modal";

export const Card = (props:Tcard) => {
    const [open, setOpen] = useState(false);
    const {name,description} = props;

    return (
      <div className="bg-white rounded-md p-3 w-[20rem] mt-2 border-2">
        <p className="text-slate-400 mt-2">Name</p>
        <p className="font-medium text-sm">Item1</p>
        <p className="text-slate-400 mt-2">Description</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          reiciendis.
        </p>

        <div className="flex justify-end gap-3 mt-4">
          <button
            type="submit"
            className="bg-white rounded-md border-2 border-slate-400 text-black w-[5rem] p-1"
            onClick={() => setOpen(true)}
          >
            Edit
          </button>
          <button
            type="submit"
            className="bg-slate-400 text-white rounded-md w-[5rem] p-1"
          >
            Delete
          </button>
        </div>
        <Modals
          show={open}
          name=""
          note=""
          setopen={setOpen}
          onHide={() => setOpen(false)}
          update={true}
        />
      </div>
    );
};