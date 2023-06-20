import React from "react";
import Book from "./Book"

class BookList extends React.Component {
    render() {
        /*Bu kod parçası, this.props.books dizisindeki her bir book öğesi için 
        <Book> bileşenlerinin oluşturulmasını sağlar. Her bir <Book> bileşeni 
        book prop'uyla birlikte render edilir ve her bir öğe için benzersiz bir key atanır.*/
        const bookList = this.props.books.map((book, i) => {
            return <Book book={book}
                key={i}
            />
        })
        return <div>{bookList}</div>
    }
}

export default BookList;