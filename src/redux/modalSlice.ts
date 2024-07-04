import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  modalSuccess: boolean;
}

const initialState: ModalState = {
  modalSuccess: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalSuccess: (state, action: PayloadAction<boolean>) => {
      state.modalSuccess = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { setModalSuccess } = modalSlice.actions;
