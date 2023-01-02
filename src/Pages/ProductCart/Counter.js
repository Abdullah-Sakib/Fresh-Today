import React, { useEffect, useState } from 'react';
import { AiOutlineMinusSquare } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { useStore } from 'react-redux';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const store = useStore();

    useEffect(() => {
        console.log(counter);
        console.log(store.getState().states.quantity);
    }, [counter, store]);

    const handleQuantity = (count) => {
        if (count === 0) {
          setCounter(0);
          store.dispatch({ type: "setQuantity", payload: 0 });
        } else {
          setCounter(counter - 1);
          store.dispatch({ type: "setQuantity", payload: (counter-1) });
        }
      };

    return (
        <div className="flex flex-1 items-end justify-between mt-4 text-sm">
            <p className="text-gray-700">Qty :</p>
            <div className="flex justify-between items-center font-family">
                <button onClick={() => handleQuantity(counter)}>
                <AiOutlineMinusSquare className="text-gray-700 h-6 w-6"></AiOutlineMinusSquare>
                </button>
                <span className="text-lg mx-3 font-bold text-gray-700 dark:text-gray-200 md:text-sm">
                    {counter}
                </span>
                <button
                onClick={() => {
                    setCounter(counter + 1);
                    store.dispatch({ type: "setQuantity", payload: counter+1 });
                }}
                >
                <BsPlusSquare className="text-gray-700  h-5 w-5"></BsPlusSquare>
                </button>
            </div>
        </div>
    );
};

export default Counter;