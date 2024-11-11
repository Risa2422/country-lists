export async function GET() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response("Failed to fetch data");
  }
}
