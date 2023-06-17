export async function GET(request: Request, response: Response) {
  console.log("GET Body", request.body);
  response.ok({ body: { message: "Hello World" } });
}
