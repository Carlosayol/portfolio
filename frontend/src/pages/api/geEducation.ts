import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "../../../sanity";
import { Education } from "types";

const query = groq`
  *[_type == "education"]
`;

interface Data {
  education: Education[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const education: Education[] = await sanityClient.fetch(query);
  res.status(200).json({ education });
}
