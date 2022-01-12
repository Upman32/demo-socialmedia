
export type FieldValidateType = (value: string) => string | undefined

export const RequiredField: FieldValidateType = (value) => {
    if (value) return undefined;

    return 'Field is needed'
}
export const MaxLengthCreator = (maxLength: number): FieldValidateType => (value) => {
    if (value.length > maxLength) return `Too much boi. Not more then ${maxLength}`;

    return undefined
}




export const maxLength30: FieldValidateType = (value) => {
    if (value.length > 30) return "Too much boi";
    
    return undefined
}