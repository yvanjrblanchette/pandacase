"use server";

import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getPaymentStatus = async ({ orderId }: { orderId: string }) => {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	if (!user?.id || !user.email) {
		throw new Error("Vous devez être connecté pour voir cette page.");
	}

	const order = await db.order.findFirst({
		where: { id: orderId, userId: user.id },
		include: {
			billingAddress: true,
			configuration: true,
			shippingAddress: true,
			user: true,
		},
	});

	if (!order) throw new Error("Cette commande ne semble pas exister");

	if (order.isPaid) {
		return order;
	} else {
		return false;
	}
};
