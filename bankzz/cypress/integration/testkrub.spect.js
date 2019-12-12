import SummitSomething from '../page/submit';


describe('summit', () => {
    it('test summit afakf', () => {
      const summitKK = new SummitSomething();
      summitKK.server();
      summitKK.visit();
      summitKK.filltext1('sawasdeekrub');
      summitKK.filltext2('sawasdeekrub');
      summitKK.filltext3('sawasdeekrub');
      summitKK.submit();
    });
  
    // more tests
  });