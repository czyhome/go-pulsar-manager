import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import stub from "@/init";

const fetch: any = createAsyncThunk(
    'option/fetch',
    async (keys: []) => {
        const res: any = await stub.api.post('option/query', {keys: keys})
        return res.data.data
    })

const slice = createSlice({
    name: "option",
    initialState: {
        data: {}
    },
    reducers: {},
    extraReducers: {
        [fetch.fulfilled]: (state: any, action: any) => {
            state.data = Object.assign({}, state.data, action.payload)
        }
    }
})
export default {
    slice,
    action: {...slice.actions, fetch}
}