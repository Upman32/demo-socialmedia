

import React from 'react'
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';



 describe("ProfileSta component", () => {
   test("it shows the expected text when clicked (testing the wrong way!)", () => {
     const component = create(<ProfileStatus status="yolo" />);
     const root = component.root;
     let span = root.findByType("span");
     expect(span).not.toBeNull();

   });
 });
 describe("ProfileSta component", () => {
   test("it shows the expected text when clicked (testing the wrong way!)", () => {
     const component = create(<ProfileStatus status="yolo" />);
     const root = component.root;
     let input = root.findByType("input");
     expect(span.innerText).not.toBeNull();

   });
 }); 