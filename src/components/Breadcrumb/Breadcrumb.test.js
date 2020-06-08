import React from "react";
import { mount } from "enzyme";
import { categories } from '../../fixtures';
import Breadcrumb from './Breadcrumb';

let wrapper;

beforeEach(() => {
    wrapper = mount(<Breadcrumb breadcrumbItems={categories} />);
});

describe("Breadcrumb", () => {
    it("should render component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render items", () => {
        const renderedItems = wrapper.find('.item');
        expect(renderedItems).toHaveLength(categories.length);
        categories.map((category, index) => {
            expect(renderedItems.at(index).text()).toEqual(category);
        });
    });
});
