export default defineEventHandler(async (event) => {
  return {
    messages: {
      hello: "from api/app",
    },
  };
});