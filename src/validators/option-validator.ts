// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
	{ label: "Noir", value: "black", tw: "zinc-900" },
	{
		label: "Bleu",
		value: "blue",
		tw: "blue-950",
	},
	{ label: "Rouge", value: "rose", tw: "rose-950" },
] as const;

export const MODELS = {
	name: "models",
	options: [
		{
			label: "iPhone X",
			value: "iphonex",
		},
		{
			label: "iPhone 11",
			value: "iphone11",
		},
		{
			label: "iPhone 12",
			value: "iphone12",
		},
		{
			label: "iPhone 13",
			value: "iphone13",
		},
		{
			label: "iPhone 14",
			value: "iphone14",
		},
		{
			label: "iPhone 15",
			value: "iphone15",
		},
	],
} as const;

export const MATERIALS = {
	name: "matériaux",
	options: [
		{
			label: "Silicone",
			value: "silicone",
			description: undefined,
			price: PRODUCT_PRICES.material.silicone,
		},
		{
			label: "Polycarbonate",
			value: "polycarbonate",
			description: "Résistant aux égratignures",
			price: PRODUCT_PRICES.material.polycarbonate,
		},
	],
} as const;

export const FINISHES = {
	name: "finitions",
	options: [
		{
			label: "Fini lustré",
			value: "smooth",
			description: undefined,
			price: PRODUCT_PRICES.finish.smooth,
		},
		{
			label: "Fini texturé",
			value: "textured",
			description: "Texture antidérapante",
			price: PRODUCT_PRICES.finish.textured,
		},
	],
} as const;
