function levenshteinDistance(str1: string, str2: string): number {
    const matrix = Array(str2.length + 1).fill(null).map(() =>
      Array(str1.length + 1).fill(null)
    );
  
    for (let i = 0; i <= str1.length; i += 1) {
      matrix[0][i] = i;
    }
  
    for (let j = 0; j <= str2.length; j += 1) {
      matrix[j][0] = j;
    }
  
    for (let j = 1; j <= str2.length; j += 1) {
      for (let i = 1; i <= str1.length; i += 1) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1, // deletion
          matrix[j - 1][i] + 1, // insertion
          matrix[j - 1][i - 1] + indicator // substitution
        );
      }
    }
  
    return matrix[str2.length][str1.length];
  }
const similarity = ({ text1, text2 }: { text1: string; text2: string }) => {
  const distance = levenshteinDistance( text1, text2 );

  const similarity =
    (1 - distance / Math.max(text1.length, text2.length)) * 100;

  return similarity.toFixed(3) + "%";
};

export default similarity;