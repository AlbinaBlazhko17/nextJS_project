import { SortEnum } from "@/components/Sort/Sort.props";
import { ProductModel } from "@/interfaces/product.interface";

export type SortActions = {type: SortEnum.byPrice} | {type: SortEnum.byRating} | { type: 'reset', initialState: ProductModel[]};

export interface SortReducerState {
	sort: SortEnum;
	products: ProductModel[];
}

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
	switch(action.type) {
		case SortEnum.byRating:
			return {
				sort: SortEnum.byRating,
				products: state.products.sort((a, b) => b.initialRating - a.initialRating)
			};
		case SortEnum.byPrice: 
			return {
				sort: SortEnum.byPrice,
				products: state.products.sort((a, b) => a.price - b.price)
			};
		case 'reset':
			return {
				sort: SortEnum.Reset,
				products: action.initialState
			};
		default: 
			throw new Error ('Invalid sorting type');
	}
};