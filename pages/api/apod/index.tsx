import type { NextApiRequest, NextApiResponse } from "next";

const apodUrl = process.env.REACT_APP_API_URL;
const apodKey = process.env.REACT_APP_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const response = await fetch(`${apodUrl}?api_key=${apodKey}`);
  const data = await response.json();
  res.status(200).json(data);
}
