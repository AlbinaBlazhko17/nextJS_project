import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";


export interface SortProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sort: SortEnum;
	setSort: (sort: Exclude<SortEnum, SortEnum.Reset>) => void;
}

export enum SortEnum {
	byRating,
	byPrice,
	Reset
}