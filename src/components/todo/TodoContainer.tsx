import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add Todo
        </Button>
        <Button className="bg-primary-gradient">Filter</Button>
      </div>
      <div className="bg-primary-gradient w-full h-full  p-1 rounded-xl ">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {/* <div className="bg-white p-3 flex justify-center item-center rounded-md font-bold text-2xl">
          <p>There is no task pending</p>
        </div> */}
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
