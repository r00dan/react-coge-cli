export const __dirname = process.cwd();

export const isNotEmpty = (word: string): boolean => !!word;

export const firstLetterToUpperCase = (word: string): string => {
  return Array.from(word, (letter, index) => {
    if (index === 0) {
      letter = letter.toUpperCase()
    }
    return letter;
  }).toString().split(',').join('');
}