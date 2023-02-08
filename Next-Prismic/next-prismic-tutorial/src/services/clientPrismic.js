import * as prismic from "@prismicio/client";
import fetch from 'node-fetch';

const routes = [ // Define routes for your Custom Types.
  {
    type: "item_description", // Documents of type "page"
    path: "/item_description" // will have this URL structure.
  },
];

const repoName = "prismic-next-tutorial-2"; // Fill in with your repository name.
const endpoint = prismic.getEndpoint(repoName); // Takes your repository name and converts it to an API endpoint.
const client = prismic.createClient(endpoint); // Creates an API client object.

export const getPages = async () => {
  const pages = await client.getAllByType('item', {
      orderings: {
        field: 'document.first_publication_date',
        direction: 'desc',
      }
  })
  return pages
}




