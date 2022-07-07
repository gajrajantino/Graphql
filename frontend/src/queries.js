import { gql } from "@apollo/client";

export const getBook = gql`
    query GetBook($id: String!) {
        getBook(id: $getBookId) {
            name
            price
        }
    }
`;

export const getBooks = gql`
    query GetBooks {
        books: getBooks {
            name
            price
        }
    }
`;

export const getReview = gql`
    query GetReview($id: String!) {
        getReview(id: $getReviewId) {
            name
            price
        }
    }
`;

export const getReviews = gql`
    query GetReviews {
        getReviews {
            text
            stars
            bookId
        }
    }
`;

export const addBook = gql`
    mutation AddBook($name: String!, $price: Float!) {
        addBook(name: $name, price: $price) {
            name
            price
        }
    }
`;
