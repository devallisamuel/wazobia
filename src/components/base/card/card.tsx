import { Tcard } from "utility/utility";

export const Card = (props:Tcard) => {
    const {name,description} = props;

    return (
      <div className="bg-white rounded-md p-3 w-[20rem] mt-2">
        <p className="text-slate-400 mt-2">Name</p>
        <p className="font-medium text-sm mt-1">Item1</p>
        <p className="text-slate-400 mt-2">Description</p>
        <p className="text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, reiciendis.</p>

        <div className="flex justify-end gap-3 mt-4">
          <button
            type="submit"
            className="bg-white rounded-md border-2 border-slate-400 text-black w-[5rem] p-1"
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
      </div>
    );
};