"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const STEPS = [
	{
		name: "Étape 1: Ajouter une image",
		description: "Choisissez votre image.",
		url: "/upload",
	},
	{
		name: "Étape 2: Personnaliser design",
		description: "Faites votre propre design.",
		url: "/design",
	},
	{
		name: "Étape 3: Sommaire",
		description: "Confirmez votre design final.",
		url: "/preview",
	},
];

const Steps = () => {
	const pathname = usePathname();

	return (
		<ol className="rounded-md bg-white lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
			{STEPS.map((step, i) => {
				const isCurrent = pathname.endsWith(step.url);
				const isCompleted = STEPS.slice(i + 1).some((step) => pathname.endsWith(step.url));
				const imgPath = `/pandacase_logo${i + 1}.svg`;

				return (
					<li key={step.name} className="relative overflow-hidden lg:flex-1">
						<div>
							<span
								className={cn("absolute left-0 top-0 h-full w-1 bg-purple-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full", {
									"bg-purple-400": isCurrent,
									"bg-purple-700": isCompleted,
								})}
								aria-hidden="true"
							/>

							<span className={cn(i !== 0 ? "lg:pl-9" : "", "flex items-center px-6 py-4 text-sm font-medium")}>
								<span className="flex-shrink-0">
									<img
										src={imgPath}
										className={cn("flex h-20 w-20 object-contain items-center justify-center", {
											"border-none": isCompleted,
											"border-zinc-700": isCurrent,
										})}
									/>
								</span>

								<span className="ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center">
									<span
										className={cn("text-sm font-semibold text-zinc-700", {
											"text-primary": isCompleted,
											"text-zinc-700": isCurrent,
										})}
									>
										{step.name}
									</span>
									<span className="text-sm text-zinc-500">{step.description}</span>
								</span>
							</span>

							{/* separator */}
							{i !== 0 ? (
								<div className="absolute inset-0 hidden w-3 lg:block">
									<svg className="h-full w-full text-gray-300" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
										<path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
									</svg>
								</div>
							) : null}
						</div>
					</li>
				);
			})}
		</ol>
	);
};

export default Steps;
