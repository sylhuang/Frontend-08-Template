function kmp(source, pattern) {
  let table = new Array(pattern.length).fill(0);
  
  {
    let i = 1, j = 0;

    while (i < pattern.length) {
      if (pattern[i] === pattern[j]) {
        table[++i] = ++j;
      } else if (j == 0) {
        i++;
      } else {
        j = table[j];
      }
    }
  }
  
  {
    let i = 0, j = 0;

    while (i < source.length) {
      if (j === pattern.length) return true;

      if (source[i] === pattern[j]) {
        i++;
        j++;
      } else if (j == 0) {
        i++;
      } else {
        j = table[j];
      }
    }

    return j === pattern.length;
  }
}