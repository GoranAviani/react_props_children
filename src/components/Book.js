import React from 'react';

const Book = ({name, author, children}) => {

    return (
        <div>
            {name}
            <p>{author}</p>
            {children}
        </div>
    )
}

export default Book;