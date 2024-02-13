import { ContactEmailTemplate } from "@/components/templates/contact-email";
import { NextApiRequest } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

export async function POST(request: Request) {
	try {
		const res = await request.json();
		const { fullName, email, idea } = res;

		const data = await resend.emails.send({
			from: `${email}`,
			to: ["adigunolamide200@gmail.com"],
			subject: " New submission from contact form!",
			react: ContactEmailTemplate({ fullName, email, idea }),
		});

		return Response.json(data);
	} catch (error) {
		console.error(error);
		return Response.json({ error });
	}
}
