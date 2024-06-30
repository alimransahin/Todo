import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div className=" bg-white flex justify-between item-center p-3 rounded-md ">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-5">
        <Button>Delete</Button>
        <Button>Edit</Button>
      </div>
    </div>
  );
};

export default TodoCard;
