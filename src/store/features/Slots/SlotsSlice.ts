import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface SlotsState {
    movieName: string;
    theatreName: string;
    city: string;
    slots: string[];
    theatreType: string;
    selectedTime: string;
    ticketPrice: number;
    totalAmount: number;
}

const initialState: SlotsState = {
    movieName: '',
    theatreName: '',
    city: '',
    slots: [],
    theatreType: '',
    selectedTime: '',
    ticketPrice: 0,
    totalAmount: 0,
};

const SlotsSlice = createSlice({
    name: "slots",
    initialState,
    reducers: {
        setSelectedShow: (
            state,
            action: PayloadAction<Omit<SlotsState, "previousMovieName">>
        ) => {
            return { ...state, ...action.payload, previousMovieName: state.movieName };
        },
        setMovieName: (state, action: PayloadAction<string>) => {
            state.movieName = action.payload;
        },
    },
});

export const slotsActions = SlotsSlice.actions;
export default SlotsSlice.reducer;
