import { fetchContacts } from 'redux/operations';

export const fetchContactsReducer = builder => {
  builder
    .addCase(fetchContacts.pending, state => {
      state.contacts.isLoading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });
};
