import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <Button>Add Todo</Button>
        <Button>Filter</Button>
      </div>
      <div className="bg-red-500 w-full  p-5 rounded-lg space-y-3">
        {/* <div className="bg-white p-3 flex justify-center item-center rounded-md font-bold text-2xl">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
