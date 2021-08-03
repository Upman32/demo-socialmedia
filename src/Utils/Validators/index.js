import React from 'react'
export const RequiredField = value =>
{ 
    if (value) return undefined;



    return 'Field is needed'



}
export const MaxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Too much boi. Not more then ${maxLength}`;



    return undefined



}








export const maxLength30 = value =>
{ 
    if (value.length > 30) return "Too much boi";



    return undefined



}