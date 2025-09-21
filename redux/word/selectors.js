export const selectLoading = state => state.word.loading;
export const selectFilter = state => state.word.filter;
export const selectAllWord = state => state.word.data;
export const selectSelectedDictionaryId = state =>
  state.dictionary.selectedDictionaryId;
