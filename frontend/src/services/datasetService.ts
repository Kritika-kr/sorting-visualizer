export const generateDataset = (type: string, size: number): number[] => {
  switch (type) {
    case 'sorted':
      return Array.from({ length: size }, (_, i) => Math.floor(((i + 1) * 90) / size) + 10);
    case 'reverse-sorted':
      return Array.from({ length: size }, (_, i) => Math.floor(((size - i) * 90) / size) + 10);
    case 'nearly-sorted': {
      const arr = Array.from({ length: size }, (_, i) => Math.floor(((i + 1) * 90) / size) + 10);
      // Swap a few adjacent elements to make it nearly sorted
      for (let i = 0; i < arr.length - 1; i += 6) {
        if (i + 1 < arr.length) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
      return arr;
    }
    case 'few-unique':
      return Array.from({ length: size }, () => {
        const choices = [15, 35, 60, 85];
        return choices[Math.floor(Math.random() * choices.length)];
      });
    case 'large-numbers':
      return Array.from({ length: size }, () => Math.floor(Math.random() * 800) + 120);
    case 'random':
    default:
      return Array.from({ length: size }, () => Math.floor(Math.random() * 90) + 10);
  }
};
