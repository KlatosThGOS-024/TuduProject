import { useRef } from "react";
import { deleteTodoRoute } from "../routes/todoRoutes";
import { logInCheck } from "../routes/userRoutes";
const useWithSound = (audioSource) => {
  const soundRef = useRef(new Audio(audioSource));

  const playSound = () => soundRef.current.play();

  return { playSound };
};
export const Todos = ({ todos, handleRefresh }) => {
  const { playSound } = useWithSound("/Audio/missionPassed.mp3");
  const deleteTodo = async (todoId) => {
    const re = await logInCheck();
    const data2 = await re.json();
    console.log("sdsdsdsdsdsdsdsd", data2);
    const response = await deleteTodoRoute(todoId);
    const data = await response.json();
    if (data.statusCode == 409) {
      alert("re-login please ");
      return;
    }
    handleRefresh();
    playSound();
  };

  return (
    <>
      <div className=" ">
        <h2
          className=" text-center font-Fredoka 
        text-2xl font-[600]"
        >
          Todos
        </h2>
        <div className="grid grid-cols-5">
          {todos.map((todo) => {
            return (
              <div
                key={todo._id}
                className=" px-3 py-4 m-3 border-2 rounded-md shadow-sm"
              >
                <h2 className=" font-[600] font-Fredoka text-2xl">
                  {todo.task}
                </h2>

                <p className=" font-sans text-md break-words">
                  {" "}
                  {todo.description}
                </p>
                <div className=" gap-2 flex items-center">
                  <button
                    onClick={() => {
                      deleteTodo(todo._id);
                    }}
                    className=" rounded-full 
             border-2  group"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" 
                   text-lightGreen-0 
                    group-hover:visible invisible  w-[24px]"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.5056 9.00958C16.2128 8.71668 15.7379 8.71668 15.445 9.00958L10.6715 13.7831L8.72649 11.8381C8.43359 11.5452 7.95872 11.5452 7.66583 11.8381C7.37294 12.1309 7.37293 12.6058 7.66583 12.8987L10.1407 15.3736C10.297 15.5299 10.5051 15.6028 10.7097 15.5923C10.8889 15.5833 11.0655 15.5104 11.2023 15.3735L16.5056 10.0702C16.7985 9.77735 16.7985 9.30247 16.5056 9.00958Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      deleteTodo(todo._id);
                    }}
                    className=" rounded-full 
             border-2 p-[5px] group"
                  >
                    <img
                      className="  w-[15px] group-hover:visible invisible"
                      src="../icons/icons8-cross-48.png"
                      alt="cross icon"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
