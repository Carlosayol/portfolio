import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "../../../sanity";
import { Experience } from "types";

const query = groq`
  *[_type == "experience"]
`;

interface Data {
  data: Experience[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data: Experience[] = await sanityClient.fetch(query);
  res.status(200).json({ data });
}
