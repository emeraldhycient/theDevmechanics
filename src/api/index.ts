export const fetchData = async <T>(
	url: string,
	method: string = "GET",
	data?: any,
) => {
	try {
		const response = await fetch(
			`https://the-devmechanics-strapi-api.onrender.com/api${url}`,
			{
				method,
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
				},
			},
		);

		if (!response.ok) {
			const errorBody = await response.json();
			throw new Error(
				`Network response was not ok: ${response.status} ${errorBody?.message}`,
			);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		if (error instanceof TypeError) {
			console.error("JSON parsing error:", error);
		} else {
			throw error; // Re-throw other errors
		}
	}
};
