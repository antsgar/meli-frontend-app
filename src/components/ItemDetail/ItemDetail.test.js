import React from "react";
import { mount } from "enzyme";
import ItemDetail from "./ItemDetail";
import { categories, item } from "../../fixtures";
import { parseCondition, parsePrice } from "../../helpers";

let wrapper;

beforeEach(() => {
    wrapper = mount(<ItemDetail item={item} categories={categories} />);
});

describe("ItemDetail", () => {
    it("should render component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should display product categories", () => {
        const breadcrumb = wrapper.find("Breadcrumb");
        expect(breadcrumb.exists()).toEqual(true);
        expect(breadcrumb.find(".item")).toHaveLength(categories.length);
    });

    it("should display product information", () => {
        const { title, price, condition, quantity, description } = item;

        expect(wrapper.find(".picture").exists()).toEqual(true);
        expect(wrapper.find(".condition").text()).toEqual(
            `${parseCondition(condition)} - ${quantity} vendidos`
        );
        expect(wrapper.find(".price").text()).toEqual(parsePrice(price));
        expect(wrapper.find(".title").text()).toEqual(title);
        expect(wrapper.find(".description").text()).toEqual(description);
    });

    it("should display buy button", () => {
        const button = wrapper.find(".button");
        expect(button.exists()).toEqual(true);
        expect(button.text()).toEqual("Comprar");
    });
});
