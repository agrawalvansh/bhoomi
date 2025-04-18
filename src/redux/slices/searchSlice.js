import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const searchProducts = createAsyncThunk(
  'search/searchProducts',
  async (searchQuery) => {
    if (searchQuery.length < 2) return [];
    
    try {
      // Mock implementation replacing Firebase functionality
      // In a real application, you would replace this with an API call to your backend
      // or implement client-side search logic
      
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // This is a placeholder for your actual search implementation
      // You should replace this with your own search logic
      console.log(`Searching for: ${searchQuery}`);
      
      // Return empty array for now - replace with actual implementation
      return [];
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  searchQuery: '',
  searchResults: [],
  loading: false,
  error: null,
  showResults: false
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearSearch: (state) => {
      state.searchQuery = '';
      state.searchResults = [];
      state.showResults = false;
    },
    setShowResults: (state, action) => {
      state.showResults = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
        state.showResults = true;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery, clearSearch, setShowResults } = searchSlice.actions;

export const selectSearchQuery = (state) => state.search.searchQuery;
export const selectSearchResults = (state) => state.search.searchResults;
export const selectSearchLoading = (state) => state.search.loading;
export const selectSearchError = (state) => state.search.error;
export const selectShowResults = (state) => state.search.showResults;

export default searchSlice.reducer;
