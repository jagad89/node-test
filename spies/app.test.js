
const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');



describe('App', ()=>{
    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db',db);

    it('shoud call a spy correctly',()=>{
        var spy = expect.createSpy();
        spy('Andrew',25);
        expect(spy).toHaveBeenCalledWith('Andrew',25);
    });

    it('should call saveUser with user object',()=>{
        var email = "user@example.com";
        var password = "psw123";

        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
});