import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "@/libs/sanity";
import { Language } from "types";

const query = groq`
  *[_type == "language"]
`;

interface Data {
  data: Language[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data: Language[] = await sanityClient.fetch(query);
  res.status(200).json({ data });
}
