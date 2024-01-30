import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRestaurant =createAsyncThunk('restaurantList/fetchRestaurant',()=>{
    const result=axios.get('/restaurant.json').then(response=>response.data)
    console.log("result in slice");
    console.log(result);
    return result;
})

export const restaurantSlice =createSlice({
    name:"restaurantList",
    initialState:{
        loading:false,
        allRestaurant:[],
        error:"",
        searchRestaurant:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading=true;
            
        })
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading=false;
            state.allRestaurant=action.payload
            state.searchRestaurant=action.payload
            state.error=""
            
        })
        builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.loading=false;
            state.allRestaurant=[];
            state.error=action.error.message
            
        })

    },
  reducers:{
    search:(state,action)=>{
        state.allRestaurant.restaurants=state.searchRestaurant.restaurants.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
    }
  }  
   
   
})
export default restaurantSlice.reducer;
export const {search}=restaurantSlice.actions