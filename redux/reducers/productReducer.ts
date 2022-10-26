import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IProduct {
  productList: string[];
  selectedItem: string | null;
  isLoading: boolean;
  error: object | null;
}
const initialState: IProduct = {
  productList: [],
  selectedItem: null,
  isLoading: false,
  error: null,
};

export interface productData {
  productList: string[];
  selectedItem: string | null;
  isLoading: boolean;
  error: object | null;
}

export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  // 썽크는 하나의 매개변수만 입력 가능
  // 그러므로 dispatch를 할때 객체로 전달해야함
  async (data: productData, thunkAPI) => {
    // const { searchQuery, page, cnt } = data;
    try {
      console.log('product data', data);
      //   const res = await api.get(
      //     `http://localhost:5000/products?q=${searchQuery}`,
      //   );
      //   console.log('res', res);
      //   const data = res.data;
      //   const list = data.slice(0, cnt * page); // 페이지 당 아이템 리스트 갯수
      //   console.log('list', list);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// export const getSingleProduct = createAsyncThunk(
//     "product/getSingleProduct",
//     async (data, thunkAPI) => {
//       console.log("Detail data??", data);
//       const { id } = data;

//       try {
//         const res = await api.get(`http://localhost:5000/products/${id}`);
//         const data = res.data;
//         console.log("data", data);
//         return thunkAPI.fulfillWithValue(data);
//       } catch (error) {
//         // 오류처리
//         return thunkAPI.rejectWithValue(error);
//       }
//     }
//   );

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action: AnyAction) => {
      console.log('pending 상태', action); // Promise가 pending일때 dispatch
      state.isLoading = true;
    }),
      builder.addCase(getAllProducts.fulfilled, (state, action: AnyAction) => {
        console.log('fulfilled 상태', action); // Promise가 fullfilled일 때 dispatch
        state.isLoading = false;
        state.productList = action.payload;
      }),
      builder.addCase(getAllProducts.rejected, (state, action: AnyAction) => {
        console.log('rejected 상태', action); // Promise가 rejected일 때 dispatch
        state.isLoading = false;
        state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      });
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
