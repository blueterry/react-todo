import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Main from 'Main';

describe('TodoApp',()=>{
    it('Should Exist', ()=>{
        expect(Main).toExist();
    });
})