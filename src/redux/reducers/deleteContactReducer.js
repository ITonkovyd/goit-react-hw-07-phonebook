import { deleteContact } from 'redux/operations';

export const deleteContactReducer = builder => {
  builder
    .addCase(deleteContact.pending, state => {
      state.contacts.isLoading = true;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });
};
