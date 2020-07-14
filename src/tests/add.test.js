const add = (a,b)=>a+b;

test('add func',()=>{
    expect(add(1,2)).toBe(3)
})

const generateGreeting = (name)=>`Hello ${name}`


test('test name',()=>{
    expect(generateGreeting('mike')).toBe('Hello mike')
})