export const selectFilter = state => state.word.filter;
export const selectWords = state => state.word.words;
export const selectShuffleWords = state => state.word.shuffleWords;
export const selectIndex = state => state.word.index;
export const selectSelectedDictionaryId = state =>
  state.dictionary.selectedDictionaryId;
export const selectSelectedDictionaryName = state =>
  state.dictionary.selectedDictionaryName;
