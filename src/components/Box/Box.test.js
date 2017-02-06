import React from 'react';
import {shallow,mount,render} from 'enzyme';  //{} called object destructors
import{expect} from 'chai';
import sinon from 'sinon';

import Box from './Box';

describe('Sum', () => {
  it('should render without error', () => {
    const wrapper = shallow(<Box />);
    expect(wrapper).to.be.ok;
  })
  it('should find component using its class name', () => {
    const wrapper = mount(<Box />);
    expect(wrapper.find(".box").length).to.equal(1);
  })
  it('should get the text from componet', () => {
    const wrapper = mount(<Box text="bharat"/>);
  expect(wrapper.text()).to.equal('bharat');
  })
  it('should get the css class from component`', () => {
    const wrapper = shallow(<Box css="selected"/>);
    expect(wrapper.html()).to.equal('<div class="box"><div class="selected"></div></div>');
  })
  it('should get the primary key (id) from component`', () => {
    const wrapper = shallow(<Box id="3"/>);
    expect(wrapper.html()).to.equal('<div class="box"><div data-id="3"></div></div>');
  })
  it('should render out full component', () => {
    const wrapper = shallow(<Box id="3" css="selected" id="3" text="bharat"/>);
    expect(wrapper.html()).to.equal('<div class="box"><div class="selected" data-id="3">bharat</div></div>');
  })
  it('should call the parents function when clicked', () => {
    const stub = sinon.stub();
    const wrapper = mount(<Box click={stub} />);
    wrapper.find('.box > div').simulate('click');
    expect(stub.callCount).to.equal(1);
  });
});
