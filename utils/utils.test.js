const utils = require('./utils');
const expect = require('expect');

it('should add two numbers',()=>{
    var res = utils.add(33,11);
    expect(res).toBeA('number').toBe(44);
    // if(res !== 44){
    //     throw new Error(`Expected 44,received ${res}`);
    // }
});

it('should square a number',()=>{
    var res = utils.square(10);
    expect(res).toBeA('number').toBe(100);


    // if(res !== 100){
    //     throw new Error(`Expected 100,received ${res}`);
    // }
});

it('shouold add two number async',(done)=>{
    utils.asyncAdd(5,6,(sum)=>{
        expect(sum).toBeA('number').toBe(11);
        done();
    });
});


it('should have some value',()=>{

    /**
     *  .toBe works with native types only,
     *  because it's using === for comparision.  
     * 
     */
    // expect({name:"John"}).toBe({name:"John"});
    /**
     * use .toEqual to and .toNotEqual to work with object and array.
     */
    expect({name:"John"}).toEqual({name:"John"});
    expect([1,2,3]).toInclude(2);
    expect([1,3]).toNotInclude(2);
    // expect([1,2,3]).toExclude(2);
});

it('should verify first and last name set',()=>{

    var user = utils.setName({},'John Wage');
    expect(user).toEqual({firstName: 'John',lastName:'Wage'});
});