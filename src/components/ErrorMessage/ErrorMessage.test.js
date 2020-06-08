import React from "react";
import { mount } from "enzyme";
import ErrorMessage from './ErrorMessage';

const message = "Error message";
let wrapper;

beforeEach(() => {
    wrapper = mount(<ErrorMessage message={message} />);
});

describe("ErrorMessage", () => {
    it("should render component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should show error message", () => {
        expect(wrapper.text()).toEqual(message);
    });
});