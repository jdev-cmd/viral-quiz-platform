import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug") || "superpower";
    const result = searchParams.get("result") || "Mystery";

    // Determine the visual theme based on the game slug
    const isStreetFood = slug === "street-food";
    const bgColor = isStreetFood ? "#f97316" : "#facc15"; // Tailwind orange-500 or yellow-400
    const titleText = isStreetFood ? "My Bengali Street Food Personality is..." : "My Hidden Superpower is...";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            backgroundColor: bgColor,
            border: "20px solid black",
            padding: "60px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontFamily: "sans-serif", // next/og uses a default sans font if none is loaded
          }}
        >
          <div style={{ fontSize: 40, fontWeight: "bold", textTransform: "uppercase", marginBottom: 20, color: "black" }}>
            {titleText}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: "900",
              textTransform: "uppercase",
              backgroundColor: "white",
              border: "8px solid black",
              padding: "30px 60px",
              boxShadow: "16px 16px 0px 0px rgba(0,0,0,1)",
              borderRadius: "20px",
              color: "black"
            }}
          >
            {result}
          </div>
          <div style={{ 
            display: "flex",
            fontSize: 30, 
            fontWeight: "bold", 
            marginTop: 50, 
            color: "black", 
            backgroundColor: "white", 
            padding: "10px 20px", 
            border: "4px solid black", 
            borderRadius: "10px" 
          }}>
            🔥 Click to play and find yours!
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}