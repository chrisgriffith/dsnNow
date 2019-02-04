import { RoundTripPipe } from './round-trip.pipe';

describe('RoundTripPipe', () => {
  it('create an instance', () => {
    const pipe = new RoundTripPipe();
    expect(pipe).toBeTruthy();
  });
});
