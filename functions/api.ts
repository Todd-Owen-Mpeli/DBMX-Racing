// Imports
import {v4} from "uuid";
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* FORM SUBMISSION */
export const sendContactForm = async (data: any) => {
	fetch("/api/mail", {
		method: "post",
		body: JSON.stringify(data, null, 2),
	}).then((res) => {
		if (!res.ok) throw new Error("Failed to send message");
		return res.json();
	});
};

/* PREVIEW PAGE */
export async function getPreviewPage(id: any) {
	const getPageByID: DocumentNode = gql`
		query getPageByID($id: ID!) {
			page(idType: DATABASE_ID, id: $id) {
				id
				title
				content
				slug
				uri
				seo {
					...SeoFragment
				}
				status
			}
		}
	`;

	const {data, errors} = await client.query({
		query: getPageByID,
		variables: {
			id: Number(id),
		},
	});

	return data || {};
}

/* LOGIN USER
 Mutations Function */
export async function loginUser(username: String, password: String) {
	console.log(username, password, v4());
	const LoginMutation: DocumentNode = gql`
		mutation LOGIN($input: LoginInput!) {
			login(input: $input) {
				authToken
				user {
					id
					username
					name
					email
					firstName
					lastName
				}
			}
		}
	`;

	const {data, errors}: any = await client.mutate({
		mutation: LoginMutation,
		variables: {
			input: {
				clientMutationId: v4(), // Generate a unique ID
				username: username || "",
				password: password || "",
			},
		},
	});

	return data || {errors: errors};
}
