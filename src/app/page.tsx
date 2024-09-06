import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-slate-50 grainy-light">
			<section>
				<MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
					<div className="col-span-2 px-6 lg:px-0 lg:pt-4">
						<div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
							<div className="absolute w-28 left-0 -top-20 hidden lg:block">
								<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
								<img src="/pandacase_logo1.svg" className="w-full" />
							</div>
							<h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
								Votre image sur une <span className="bg-purple-600 px-2 text-white">coque</span> personnalisée
							</h1>
							<p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
								Immortalisez vos souvenirs préférés avec votre propre <span className="font-semibold">coque de téléphone unique</span>. Pandacase vous permet de
								protéger non seulement votre téléphone, mais également vos souvenirs!
							</p>

							<ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
								<div className="space-y-2">
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-purple-600" />
										Matériau durable de haute qualité
									</li>
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-purple-600" />
										Garantie de 5 ans sur l'impression
									</li>
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-purple-600" />
										Tous les modèles d'iPhone modernes
									</li>
								</div>
							</ul>

							<div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
								<div className="flex -space-x-4">
									<img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-1.png" alt="user image" />
									<img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-2.png" alt="user image" />
									<img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-3.png" alt="user image" />
									<img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-4.jpg" alt="user image" />
									<img className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-5.jpg" alt="user image" />
								</div>

								<div className="flex flex-col justify-between items-center sm:items-start">
									<div className="flex gap-0.5">
										<Star className="h-4 w-4 text-purple-600 fill-purple-600" />
										<Star className="h-4 w-4 text-purple-600 fill-purple-600" />
										<Star className="h-4 w-4 text-purple-600 fill-purple-600" />
										<Star className="h-4 w-4 text-purple-600 fill-purple-600" />
										<Star className="h-4 w-4 text-purple-600 fill-purple-600" />
									</div>

									<p>
										<span className="font-semibold">1,250</span> clients satisfaits!
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
						<div className="relative md:max-w-xl">
							<img src="/your-image.svg" className="absolute w-40 lg:w-52 left-60 -top-20 select-none hidden sm:block lg:hidden xl:block" />
							<img src="/line.svg" className="absolute w-20 -left-6 -bottom-6 select-none" />
							<Phone className="w-64" imgSrc="/testimonials/1.jpg" />
						</div>
					</div>
				</MaxWidthWrapper>
			</section>

			{/* value proposition section */}
			<section className="bg-slate-100 grainy-dark py-24">
				<MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
					<div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
						<h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 underline underline-offset-8 decoration-[4px] decoration-dashed decoration-purple-600">
							Ce que nos clients disent
						</h2>
						<img src="/pandacase_thank-you.svg" className="w-24 order-0 lg:order-2" />
					</div>

					<div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
						<div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
							<div className="flex gap-0.5 mb-2">
								<Star className="h-5 w-5 text-purple-600 fill-purple-600" />
								<Star className="h-5 w-5 text-purple-600 fill-purple-600" />
								<Star className="h-5 w-5 text-purple-600 fill-purple-600" />
								<Star className="h-5 w-5 text-purple-600 fill-purple-600" />
								<Star className="h-5 w-5 text-purple-600 fill-purple-600" />
							</div>
							<div className="text-lg leading-8">
								<p>
									"La coque semble durable et j'ai même reçu un compliment éa propos de mon design. J'ai la coque depuis deux mois et demi maintenant et{" "}
									<span className="p-0.5 bg-slate-800 text-white">l'image est super claire!</span> L'image sur la coque que j'avais avant a commencé à
									s'estomper et à jaunir après seulement quelques semaines. Je l'adore."
								</p>
							</div>
							<div className="flex gap-4 mt-2">
								<img className="rounded-full h-12 w-12 object-cover" src="/users/user-1.png" alt="user" />
								<div className="flex flex-col">
									<p className="font-semibold">Jacques</p>
									<div className="flex gap-1.5 items-center text-zinc-600">
										<Check className="h-4 w-4 stroke-[3px] text-purple-600" />
										<p className="text-sm">Achat confirmé</p>
									</div>
								</div>
							</div>
						</div>

						{/* second user review */}
						<div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
							<div className="flex gap-0.5 mb-2">
								<Star className="h-5 w-5 text-purple-600 fill-purple-600" />
								<Star className="h-5 w-5 text-purple-600 fill-purple-600" />
								<Star className="h-5 w-5 text-purple-600 fill-purple-600" />
								<Star className="h-5 w-5 text-purple-600 fill-purple-600" />
								<Star className="h-5 w-5 text-purple-600 fill-purple-600" />
							</div>
							<div className="text-lg leading-8">
								<p>
									"Je garde généralement mon téléphone avec mes clés dans ma poche, ce qui a entraîné des marques de rayures assez importantes sur toutes mes
									dernières coques de téléphone. Celle-ci, <span className="p-0.5 bg-slate-800 text-white">semble neuve même après environ six mois.</span>.
									J'adore."
								</p>
							</div>
							<div className="flex gap-4 mt-2">
								<img className="rounded-full h-12 w-12 object-cover" src="/users/user-4.jpg" alt="user" />
								<div className="flex flex-col">
									<p className="font-semibold">William</p>
									<div className="flex gap-1.5 items-center text-zinc-600">
										<Check className="h-4 w-4 stroke-[3px] text-purple-600" />
										<p className="text-sm">Achat confirmé</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>

				<div className="pt-16">
					<Reviews />
				</div>
			</section>

			<section>
				<MaxWidthWrapper className="py-24">
					<div className="mb-12 px-6 lg:px-8">
						<div className="mx-auto max-w-2xl sm:text-center">
							<h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
								Commandez votre <span className="relative px-2 bg-purple-600 text-white">coque personnalisée</span> dès maintenant
							</h2>
						</div>
					</div>

					<div className="mx-auto max-w-6xl px-6 lg:px-8">
						<div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
							<img src="/arrow.png" className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0" />

							<div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
								<img src="/horse.jpg" className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full" />
							</div>

							<Phone className="w-60" imgSrc="/horse_phone.jpg" />
						</div>
					</div>

					<ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
						<li className="w-fit">
							<Check className="h-5 w-5 text-purple-600 inline mr-1.5" />
							Matériau durable de haute qualité
						</li>
						<li className="w-fit">
							<Check className="h-5 w-5 text-purple-600 inline mr-1.5" />
							Résistant aux rayures et aux empreintes digitales
						</li>
						<li className="w-fit">
							<Check className="h-5 w-5 text-purple-600 inline mr-1.5" />
							Compatible avec la charge sans fil
						</li>
						<li className="w-fit">
							<Check className="h-5 w-5 text-purple-600 inline mr-1.5" />
							Garantie de 5 ans sur l'impression
						</li>

						<div className="flex justify-center">
							<Link
								className={buttonVariants({
									size: "lg",
									className: "mx-auto mt-8",
								})}
								href="/configure/upload"
							>
								Créer vore coque maintenant <ArrowRight className="h-4 w-4 ml-1.5" />
							</Link>
						</div>
					</ul>
				</MaxWidthWrapper>
			</section>
		</div>
	);
}
