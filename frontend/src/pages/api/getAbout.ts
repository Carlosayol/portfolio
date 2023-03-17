import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "../../../sanity";
import { About } from "types";

const query = groq`
  *[_type == "project"][0]
`;

interface Data {
  about: About;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const about: About = await sanityClient.fetch(query);
  res.status(200).json({ about });
}
