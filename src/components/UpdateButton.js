import React from 'react';

const UpdateButton = ({ callback, hasFinished, isItems, autoupdate }) => {
    return (
        <button onClick={callback} disabled={!hasFinished || isItems || autoupdate}>
            {!hasFinished ? 'Обновляю' : 'Обновить'}
        </button>
    );
}

export default UpdateButton;
