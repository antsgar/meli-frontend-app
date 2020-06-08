import React from "react";
import { mount } from "enzyme";
import SearchBar from "./SearchBar";

const search = "iPhone";
let wrapper;

beforeEach(() => {
    wrapper = mount(<SearchBar search={search} />);
});

describe("SearchBar", () => {
    it("should render component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should display logo", () => {
        expect(wrapper.find(".logo").exists()).toEqual(true);
    });

    it("should show search query", () => {
        expect(wrapper.find(".searchBox").getElement().props.value).toEqual(
            search
        );
    });
});
