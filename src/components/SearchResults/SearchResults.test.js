import React from "react";
import { mount } from "enzyme";
import SearchResults from "./SearchResults";
import { categories, items } from "../../fixtures";

let wrapper;

beforeEach(() => {
    wrapper = mount(<SearchResults items={items} categories={categories} />);
});

describe("SearchResults", () => {
    it("should render component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should display product categories", () => {
        const breadcrumb = wrapper.find("Breadcrumb");
        expect(breadcrumb.exists()).toEqual(true);
        expect(breadcrumb.find(".item")).toHaveLength(categories.length);
    });

    it("should display results card", () => {
        expect(wrapper.find("ResultsCard").exists()).toEqual(true);
    });
});
