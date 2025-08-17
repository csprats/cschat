import { getStore } from "@netlify/blobs";

export const handler = async (event, context) => {
  // Las credenciales son inyectadas automáticamente
  const store = getStore("data");

  // Manejar diferentes métodos HTTP (GET, POST, etc.)
  switch (event.httpMethod) {
    case 'GET':
      try {
        const posts = await store.get("posts.json", { type: "json" });
        return {
          statusCode: 200,
          body: JSON.stringify(posts || []),
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: JSON.stringify({ error: `Failed to retrieve data: ${error.message}` }),
        };
      }

    case 'POST':
      try {
        const body = JSON.parse(event.body);
        const posts = (await store.get("posts.json", { type: "json" })) || [];
        const newPost = { ...body, id: posts.length + 1 };
        posts.push(newPost);
        await store.set("posts.json", JSON.stringify(posts));

        return {
          statusCode: 201,
          body: JSON.stringify(newPost),
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: JSON.stringify({ error: `Failed to create post: ${error.message}` }),
        };
      }

    default:
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
      };
  }
};