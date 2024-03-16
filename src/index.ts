/**
 * Removes consecutive duplicates from each array in the input.
 * @param payload The input containing data arrays.
 * @returns The result with consecutive duplicates removed from each array.
 */
const removeConsecutiveDuplicates = (payload: Record<string, any[]>): Record<string, any[]> => {
  const result: Record<string, any[]> = {};

  for (const key in payload) {
    const keyData = payload[key];

    result[key] = keyData.filter((value, index) => index === 0 || value !== keyData[index - 1]);
  }

  return result;
}


export { removeConsecutiveDuplicates }