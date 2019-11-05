import { expect } from 'chai';
import FooBarQix from '../src/index';

describe('Coding Dojo - FooBarQix', function() {
  describe('compute string', function() {
    it('should return "1" when the value is "1"', function() {
      expect(FooBarQix("1")).to.equal("1");
    });
    it('should return "2" when the value is "2"', function() {
      expect(FooBarQix("2")).to.equal("2");
    });

    it('should return "FooFoo" when the value is "3"', function() {
      expect(FooBarQix("3")).to.equal("FooFoo");
    });

    it('should return "4" when the value is "4"', function() {
      expect(FooBarQix("4")).to.equal("4");
    });

    it('should return "BarBar" when the value is "5"', function() {
      expect(FooBarQix("5")).to.equal("BarBar");
    });

    it('should return "Foo" when the value is "6"', function() {
      expect(FooBarQix("6")).to.equal("Foo");
    });

    it('should return "QixQix" when the value is "7"', function() {
      expect(FooBarQix("7")).to.equal("QixQix");
    });

    it('should return "Foo" when the value is "9"', function() {
      expect(FooBarQix("9")).to.equal("Foo");
    }); 

    it('should return "Bar" when the value is "10"', function() {
      expect(FooBarQix("10")).to.equal("Bar");
    });

    it('should return "Foo" when the value is "13"', function() {
      expect(FooBarQix("13")).to.equal("Foo");
    });

    it('should return "FooBarBar" when the value is "15"', function() {
      expect(FooBarQix("15")).to.equal("FooBarBar");
    });

    it('should return "BarFoo" when the value is "53"', function() {
      expect(FooBarQix("53")).to.equal("BarFoo");
    });
  });
});