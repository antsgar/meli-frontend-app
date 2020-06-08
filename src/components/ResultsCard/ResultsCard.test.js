import React from "react";
import { mount } from "enzyme";
import ResultsCard from "./ResultsCard";
import { items } from '../../fixtures';

let wrapper;

beforeEach(() => {
    wrapper = mount(<ResultsCard results={items} />);
});

describe("ResultsCard", () => {
    it("should render component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should display result items", () => {
        expect(wrapper.find("Result")).toHaveLength(items.length);
    });
});
