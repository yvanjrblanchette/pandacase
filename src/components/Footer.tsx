import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
	return (
		<footer className="bg-white h-20 relative">
			<MaxWidthWrapper>
				<div className="border-t border-gray-200" />

				<div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
					<div className="text-center md:text-left pb-2 md:pb-0">
						<p className="text-sm text-muted-foreground">
							&copy; {new Date().getFullYear()}{" "}
							<Link href="/" className="font-medium inline-block group">
								<span className="text-purple-600 group-hover:text-purple-400 transition font-bold">Panda</span>Case
							</Link>
							. Tous droits réservés.
						</p>
					</div>

					<div className="flex items-center justify-center">
						<div className="flex justify-end items-center text-sm text-muted-foreground">
							Une création de
							<Link href="https://yvanblanchette.com" className="text-purple-600 font-bold hover:text-purple-400 transition">
								&nbsp;Yvan jr Blanchette
							</Link>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</footer>
	);
};

export default Footer;
