import * as React from "react";

interface Props {
	fullName: string;
	email: string;
	idea: string;
}

export const ContactEmailTemplate: React.FC<Readonly<Props>> = ({
	fullName,
	email,
}) => (
	<div>
		<h1>Welcome, {fullName}!</h1>
	</div>
);
