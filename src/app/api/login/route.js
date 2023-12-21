import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  if (email === "" || password === "") {
    return NextResponse.json(
      {
        error: "Email or password is incorrect",
      },
      {
        status: 401,
      },
    );
  }

  // https://behumane.co/
  if (email === "admin@behumane.co" && password === "behumane") {
    const response = NextResponse.json(
      {
        message: "Logged in successfully",
        success: true,
      },
      {
        status: 200,
      },
    );
    // set this token in the user cookies
    const token = "123456789";
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  }

  return NextResponse.json(
    {
      error: "We have some issues, try again later",
    },
    {
      status: 500,
    },
  );
}
