import { useState } from "react";

interface ListGroupProps {
    items: string[]; // Array of strings representing the items in the list group
    heading: string; // Heading for the list group
    onSelectItem: (item: string) => void; // Callback function to handle item selection
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {

    const [selectedIndex, setSelectedIndex] = useState(-1); // Initialize selectedIndex with -1 to indicate no selection

    // const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    //     const target = e.currentTarget;
    //     target.style.color = target.style.backgroundColor === 'blue' ? 'black' : 'white';
    //     target.style.backgroundColor = target.style.backgroundColor === 'blue' ? 'white' : 'blue';
    // };

    return (

        <>
        <h1>{heading}</h1><hr />

        <ul className="list-group p-3 m-0 border-0 bd-example m-0 border-0">
            {items.map((item, index) => (
                <li
                    key={index}
                    className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        setSelectedIndex(index); // Update selectedIndex to the clicked item's index
                        onSelectItem(item); // Call the onSelectItem callback with the clicked item
                    }}
                >
                    {item}
                </li>      
            ))}
        </ul>
        </>
    );
}

export default ListGroup;
// This code defines a functional component named `ListGroup` in React.