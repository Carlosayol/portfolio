import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "@/utils/sanity";
import { Social } from "types";

const query = groq`
  *[_type == "social"]
`;

interface Data {
  data: Social[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data: Social[] = await sanityClient.fetch(query);
  res.status(200).json({ data });
}
