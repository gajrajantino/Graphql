import { useQuery } from "@apollo/client";
import AddBook from "./AddBook";
import { getBooks } from "./queries";

function App() {
    const { data, loading, error } = useQuery(getBooks);

    if (loading) return <div>Loading...</div>;
    else if (error) return <div>Error....</div>;
    else
        return (
            <div className="flex flex-col gap-1 p-14">
                {data?.books.map((book, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col gap-2 border-2 border-orange-700 p-8 basis-16 "
                        >
                            <h1>Name : {book.name}</h1>
                            <p>Price : {book.price}</p>
                        </div>
                    );
                })}
                <AddBook />
            </div>
        );
}

export default App;
