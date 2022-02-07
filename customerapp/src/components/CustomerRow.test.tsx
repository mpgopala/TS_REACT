import { render, screen, fireEvent } from '@testing-library/react';
import CustomerRow from './CustomerRow';

describe("customer row tests", () => {
    let c = {
        id:6,
        firstName : 'Gavin',
        lastName: 'King'
    };

    let callback = jest.fn(); // mock function
    
    test("render customer Row", () => {
        render(<CustomerRow 
            key={c.id} 
            customer={c}
            delEvent={callback} />);
        let elem = screen.getByText(/Gavin/i);
        expect(elem).toBeInTheDocument();
    });

    it("delete a customer", () => {
        render(<CustomerRow 
            key={c.id} 
            customer={c}
            delEvent={callback} />);

            let btn = screen.getByRole('button');
            fireEvent.click(btn);
            expect(callback).toBeCalledTimes(1);
            expect(callback).toBeCalledWith(6);
    });

})
