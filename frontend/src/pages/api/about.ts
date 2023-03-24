import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "../../../sanity";
import { About } from "types";

const query = groq`
  *[_type == "about"][0]
`;

interface Data {
  data: About;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data: About = await sanityClient.fetch(query);
  res.status(200).json({ data });
}
