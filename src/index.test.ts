import { removeConsecutiveDuplicates } from './index.ts';

describe('removeConsecutiveDuplicates', () => {
  const input = {
    "datapoint_1": [1.0, 2.3, 1.2, 3.4, 2.0, 2.0, 3.1, 2.3],
    "datapoint_2": [true, true, true, false, true, false],
    "datapoint_3": ["active", "inactive", "active", "active", "inactive", "inactive"],
    "empty": []
  };

  const expectedOutput = {
    "datapoint_1": [1.0, 2.3, 1.2, 3.4, 2.0, 3.1, 2.3],
    "datapoint_2": [true, false, true, false],
    "datapoint_3": ["active", "inactive", "active", "inactive"],
    "empty": []
  };

  it('Should return an object', () => {
    function isObject(value: {}): boolean {
      return typeof value === 'object' && value !== null;
    }

    const result = removeConsecutiveDuplicates(input);
    expect(isObject(result)).toBe(true);
  })

  it('Should remove consecutive duplicates', () => {
    const result = removeConsecutiveDuplicates(input);
    expect(result).toEqual(expectedOutput);
  });
});
