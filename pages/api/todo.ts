// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createTodo, removeTodo } from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    await createTodo(data);
    return res.status(200).json({ name: "Success" });
  } else if (req.method === "DELETE") {
    const data = parseInt(req.body);
    await removeTodo(data);
    return res.status(200).json({ name: "Success" });
  }
  res.status(200).json({ name: "John Doe" });
}

