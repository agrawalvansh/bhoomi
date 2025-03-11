import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const searchProducts = createAsyncThunk(
  'search/searchProducts',
  async (searchQuery) => {
    if (searchQuery.length < 2) return [];
    
    try {
      const productsRef = collection(db, 'products');
      const searchTerms = searchQuery.toLowerCase().split(' ');
      
      // Create OR queries for each search term
      const queries = searchTerms.map(term => 
        query(productsRef, where('keywords', 'array-contains', term))
      );
      
      // Execute all queries
      const querySnapshots = await Promise.all(
        queries.map(q => getDocs(q))
      );
      
      // Combine and deduplicate results
      const results = new Map();
      querySnapshots.forEach(snapshot => {
        snapshot.docs.forEach(doc => {
          if (!results.has(doc.id)) {
            results.set(doc.id, { id: doc.id, ...doc.data() });
          }
        });
      });
      
      return Array.from(results.values());
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
