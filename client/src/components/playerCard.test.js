import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import PlayerCard from './playerCard';


describe('<playerCard />', () => {
    it('renders without crashing', () => {
    render(<PlayerCard />);
});
    it('props are passing', () => {
        const player = render(<PlayerCard player={() => clicked = true} />)
        player.getByText(/players/i)
        player.getByText(/country/i)
        player.getByText(/searches/i)

    })

})