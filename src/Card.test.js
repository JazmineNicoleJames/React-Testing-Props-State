import { render } from "@testing-library/react";
import Card from "./Card";

it('matches snapshot', () => {
    const { asFragment } = render('< Card />');
    expect(asFragment()).toMatchSnapshot()
});

it('renders without crashing', () => {
    render('<Card />');
});

/* it('should contain image class', () => {
    const { getByText } = render(<Card />);

}) */