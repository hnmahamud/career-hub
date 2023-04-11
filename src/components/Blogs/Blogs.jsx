import React from "react";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";

const Blogs = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="bg-base-200 text-center flex justify-between items-center">
        <img className="h-16 md:h-32" src={vector1} alt="" />
        <h3 className="text-gray-600 text-xl font-extrabold py-10">
          Personal Blogs
        </h3>
        <img className="h-16 md:h-32 -mt-32" src={vector2} alt="" />
      </div>

      {/* Blogs Section */}
      <div className="w-[95%] md:w-[80%] mx-auto flex flex-col space-y-4 my-12">
        <div className="card card-side border rounded-md shadow-md">
          <div className="col-span-2 card-body">
            <div className="flex flex-col space-y-4">
              <h2 className="text-gray-600 text-lg font-bold">
                When should you use context API?
              </h2>
              <p className="text-subTitle">
                The React Context API is ideal for scenarios where you want to
                efficiently share data or state between multiple components,
                manage frequently changing data, handle unrelated data, or deal
                with deeply nested components within a medium to large-sized
                React application. By leveraging the Context API, you can avoid
                prop drilling, centralize state management, and provide a
                scalable and organized approach to handling shared data across
                your components.
              </p>
            </div>
          </div>
        </div>

        <div className="card card-side border rounded-md shadow-md">
          <div className="col-span-2 card-body">
            <div className="flex flex-col space-y-4">
              <h2 className="text-gray-600 text-lg font-bold">
                What is a custom hook?
              </h2>
              <p className="text-subTitle">
                A custom hook in React is a reusable function that encapsulates
                logic for specific behavior, abstracts it from components, and
                promotes code reusability. It follows a naming convention of
                "use" followed by a descriptive name, like "useFetch" or
                "useLocalStorage." Custom hooks utilize React's built-in hooks
                and can have their own state, returning values, objects, or
                functions. They enable efficient and modular code by eliminating
                duplication and promoting separation of concerns. Custom hooks
                are a powerful tool for creating concise and scalable React
                applications.
              </p>
            </div>
          </div>
        </div>

        <div className="card card-side border rounded-md shadow-md">
          <div className="col-span-2 card-body">
            <div className="flex flex-col space-y-4">
              <h2 className="text-gray-600 text-lg font-bold">
                What is useRef?
              </h2>
              <p className="text-subTitle">
                useRef is a React hook for creating and managing mutable
                references in functional components. It allows access to DOM
                elements or other mutable values without causing re-renders.
                Commonly used for tasks like accessing input values, managing
                focus, or handling animations. Efficient and handy for managing
                mutable data in React components.
              </p>
            </div>
          </div>
        </div>

        <div className="card card-side border rounded-md shadow-md">
          <div className="col-span-2 card-body">
            <div className="flex flex-col space-y-4">
              <h2 className="text-gray-600 text-lg font-bold">
                What is useMemo?
              </h2>
              <p className="text-subTitle">
                useMemo is a React hook for memoization, caching the result of a
                computation and returning the cached result when the inputs to
                the computation have not changed. It helps prevent unnecessary
                computations in components, improving performance. It takes a
                function and an array of dependencies as arguments, and returns
                the computed value, which is only recomputed if dependencies
                change. Memoize expensive operations like sorting or filtering
                to optimize performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
