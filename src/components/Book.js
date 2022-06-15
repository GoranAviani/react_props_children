import React from 'react';


const Book = ({name, title}) => {

    return (
        <div>
            {name}
            <p>{title}</p>
        </div>
    )
}

export default Book;