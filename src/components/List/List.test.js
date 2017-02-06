import React from 'react';
import {shallow,mount,render} from 'enzyme';  //{} called object destructors
import{expect} from 'chai';
import sinon from 'sinon';

import List from './List';
import Box from '../Box/Box'

let boxes;
describe('List', () => {
  beforeEach(() => {
    boxes = [
      {id:1, text:"bharat", css:"selected"},
      {id:2, text:"dinesh", css:"empty"},
      {id:3, text:"someone", css:"selected"}
    ];
  });
  it('should render without error', () => {
    var boxes = [
      {id:1, text:"bharat", css:"selected"}
    ];
    const wrapper = mount(<List header="Students" items={boxes}/>);
    expect(wrapper).to.be.ok;
  })
  it('should find component using its class name', () => {
    var boxes = [
      {id:1, text:"bharat", css:"selected"}
    ];
    const wrapper = mount(<List header="Student List" items={boxes}/>);
    expect(wrapper.find(".list").length).to.equal(1);
  })
  it('should get the text from componet', () => {
    var boxes = [
      {id:1, text:"bharat", css:"selected"}
    ];
    const wrapper = mount(<List header="students" items={boxes}/>);
  expect(wrapper.text()).to.equal('studentsbharat');
  })
  it('should render out 3 boxes', () => {

    const wrapper = mount(<List header="Student List" items={boxes}/>);
    expect(wrapper.find(".box").length).to.equal(3);
  })
  it('should display "bharat" in the 1st box', () => {
    const wrapper = mount(<List header="Student List" items={boxes}/>);
    expect(wrapper.find('.box').at(0).find('div > div').html()).to.equal('<div class="selected" data-id="1">bharat</div>');
  })
  it('should call function if 1st box is clicked', () => {
    const stub = sinon.stub();
    const wrapper = mount(<List click={stub} header="Student List" items={boxes}/>);
    wrapper.find('.box').at(0).find('div > div').simulate('click')
    expect(stub.callCount).to.equal(1);
  })
});
