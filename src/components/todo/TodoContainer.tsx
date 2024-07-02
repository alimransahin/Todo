import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full  p-1 rounded-xl ">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {/* <div className="bg-white p-3 flex justify-center item-center rounded-md font-bold text-2xl">
          <p>There is no task pending</p>
        </div> */}

          {todos.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
