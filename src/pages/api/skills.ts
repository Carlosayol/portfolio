import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "@/utils/sanity";
import { Skill } from "types";

const query = groq`
  *[_type == "skill"]
`;

interface Data {
  data: Skill[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data: Skill[] = await sanityClient.fetch(query);
  res.status(200).json({ data });
}
