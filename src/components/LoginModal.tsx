import type { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "./ui/button";

const LoginModal = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
	return (
		<Dialog onOpenChange={setIsOpen} open={isOpen}>
			<DialogContent className="absolute z-[9999999]">
				<DialogHeader>
					<div className="relative mx-auto w-24 h-24 mb-2">
						<Image src="/pandacase_logo1.svg" alt="Image de panda" className="object-contain" fill />
					</div>
					<DialogTitle className="text-3xl text-center font-bold tracking-tight text-gray-900">Connectez-vous pour continuer</DialogTitle>
					<DialogDescription className="text-base text-center py-2">
						<span className="font-medium text-zinc-900">Votre configuration a été sauvegardée! </span> Merci de vous connecter ou de créer un compte pour
						finaliser votre commande.
					</DialogDescription>
				</DialogHeader>

				<div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
					<LoginLink className={buttonVariants({ variant: "outline" })}>Connection</LoginLink>
					<RegisterLink className={buttonVariants({ variant: "default" })}>Créer un compte</RegisterLink>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default LoginModal;
