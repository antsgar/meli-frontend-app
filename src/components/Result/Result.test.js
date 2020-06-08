import React from "react";
import { mount } from "enzyme";
import Result from "./Result";
import { items } from "../../fixtures";
import { parsePrice } from "../../helpers";

const [result] = items;
let wrapper;

beforeEach(() => {
    wrapper = mount(<Result result={result} />);
});

describe("Result", () => {
    it("should render component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should display product information", () => {
        const { title, price, free_shipping, state_name } = result;

        expect(wrapper.find(".picture").exists()).toEqual(true);
        expect(wrapper.find(".priceAndShipping").text()).toEqual(
            parsePrice(price)
        );
        expect(wrapper.find(".freeShippingIcon").exists()).toEqual(
            free_shipping
        );
        expect(wrapper.find(".stateName").text()).toEqual(state_name);
    });
});
