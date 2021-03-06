// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function(){
    it('should be a defined function', function() {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return Hello Alex! when "Alex" is passed through', function(){
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return Hello, Pat! when Pat is passed through', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should ', function() {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return "Hello World! if value equals the boolean of true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" if value equals false', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });


});

