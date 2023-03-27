import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface ReviewFormProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	productId: string
}