const example_input = {
  "datapoint_1": [1.0, 2.3, 1.2, 3.4, 2.0, 2.0, 3.1, 2.3],
  "datapoint_2": [true, true, true, false, true, false],
  "datapoint_3": ["active", "inactive", "active", "active", "inactive", "inactive"]
}

const removeConsecutiveDuplicates = (payload: Record<string, any[]>): Record<string, any[]> => {
  const result: Record<string, any[]> = {};

  for (const key in payload) {
    const keyData = payload[key];

    result[key] = keyData.filter((value, index) => index === 0 || value !== keyData[index - 1]);
  }

  return result;
}

const rCD = removeConsecutiveDuplicates(example_input);

console.log(rCD);

