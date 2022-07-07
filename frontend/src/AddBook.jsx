import { useLazyQuery, useMutation } from "@apollo/client";
import React from "react";
import * as queries from "./queries";

const handleChange = (handler) => (event) => handler(event.target.value);

function AddBook() {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState(0);

    const [addBookMutation] = useMutation(queries.addBook, {
        onCompleted: () => {
            alert("Book added successfully");
        },

        onError: (error) => {
            alert(error.message);
        },
    });

    console.log(queries);

    return (
        <div className="flex gap-3 p-4">
            <input
                className="border-2 border-black"
                type="text"
                value={name}
                onChange={handleChange(setName)}
            />
            <input
                className="border-2 border-black"
                type="number"
                value={price}
                onChange={handleChange(setPrice)}
            />
            <button
                type="button"
                className="border-2 rounded p-8 bg-orange-300 text-black"
                onClick={() => {
                    addBookMutation({
                        variables: {
                            name,
                            price: Number(price),
                        },
                    });
                }}
            >
                Add
            </button>
        </div>
    );
}

export default AddBook;
