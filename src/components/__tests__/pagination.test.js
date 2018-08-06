import React from 'react';
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import Pagination from "../Pagination";

Enzyme.configure({ adapter: new Adapter() });

describe("<Pagination />", () => {
    const props = {
        totalItemsCount: 22,
        itemsCountPerPage: 2,
        activePage: 3,
        pagerClick: () => { }
    };

    describe("render()", () => {
        it("should renders a UL tag", () => {
            const wrapper = mount(<Pagination {...props} />);
            expect(wrapper.find("ul")).toHaveLength(1);
        });

        it("should have 'pagination' class", () => {
            const wrapper = mount(<Pagination {...props} />);
            expect(wrapper.find("ul").hasClass('pagination')).toBeTruthy();
        });

        it("should have active class", () => {
            const wrapper = mount(<Pagination {...props} />);
            expect(wrapper.find("ul").children().at(2).hasClass('active')).toBeTruthy();
        });

        it("renders the appropriate amount of children", () => {
            const wrapper = mount(<Pagination {...props} />);
            expect(wrapper.find("ul").children().children().length).toBe(11);
        });

        it("should have correct id attached to anchor tag", () => {
            const wrapper = mount(<Pagination {...props} />);
            expect(wrapper.find("ul").children().children().at(2).props().id).toBe(3);
        });
    })


});