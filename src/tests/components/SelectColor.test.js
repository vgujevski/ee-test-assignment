import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { SelectColor } from "../../components/SelectColor";

configure({ adapter: new Adapter() });
const title = "Select Color:";
let wrapper = shallow(<SelectColor />);

describe("SelectColor", () => {
  it("should render correct title", () => {
    expect(wrapper.find("h2").text()).toEqual(title);
  });
});
