import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders logo', () => {
        render(<App />);
        const logo = screen.getByAltText(/Trivia Bot logo/i);
        expect(logo).toBeInTheDocument();
    });
});
