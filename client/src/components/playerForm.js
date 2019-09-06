import React from 'react';

function playerForm(props) {

    return (
        <>
        {props.data.map(player => (
            <div key={player.id} className='player'>
                <div>
                    <h3>{player.name}</h3>
                    <p>{player.country}</p>
                    <p>{player.searches}</p>
                    </div>
                    </div>
        ))}
        </>
    )
}

export default playerForm;