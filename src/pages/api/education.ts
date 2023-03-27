import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "@/utils/sanity";
import { Education } from "types";

const query = groq`
  *[_type == "education"]
`;

interface Data {
  data: Education[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data: Education[] = await sanityClient.fetch(query);
  res.status(200).json({ data });
}
