import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import Loader from "./Loader";

test('renders content', () => {
    const note = {
        content: 'This is a test'
    };

   const component = render (<Loader />);
})

