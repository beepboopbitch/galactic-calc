import { Input } from '../src/backEnd.js';



describe('age', function() {
  it('should take users age and not change it', function() {
    const newInput = new Input(19);
    expect(newInput.age).toEqual(Input);
  });
});
