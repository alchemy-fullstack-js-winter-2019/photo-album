import React from 'react';


function List() {
    const listOfDogs = ['spot', 'sparky'].map(dog => {
        return <li key = {dog}>{dog}</li>;
    });
    return (     
        <main>
            <ul>
                {listOfDogs}
            </ul>
        </main>
    );
}
export default List;