import React from 'react';

const UpdateButton = ({ callback, hasFinished, isItems, autoupdate }) => {
    return (
        <button
            className={'update-button mr15'}
            onClick={callback}
            disabled={!hasFinished || isItems || autoupdate}
        >
            {!hasFinished ? 'Обновляю' : 'Обновить'}
        </button>
    );
}

export default UpdateButton;
