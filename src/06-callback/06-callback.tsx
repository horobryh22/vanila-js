import React from 'react';

export const User = () => {

    const deleteUser = () => {
        alert('deleted');
    }

    const saveUser = () => {
        alert('saved');
    }

    const onNameChanged = () => {
        alert('changed');
    }

    return (
        <div>
            <textarea onChange={onNameChanged}>Dimych</textarea>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}