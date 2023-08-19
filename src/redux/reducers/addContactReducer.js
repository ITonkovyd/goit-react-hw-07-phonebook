import { addContact } from 'redux/operations';

export const addContactReducer = builder => {
  builder
    .addCase(addContact.pending, state => {
      state.contacts.isLoading = true;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    })
    .addCase(addContact.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });
};
