import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "../../../sanity";
import { Language } from "types";

const query = groq`
  *[_type == "language"]
`;

interface Data {
  languages: Language[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const languages: Language[] = await sanityClient.fetch(query);
  res.status(200).json({ languages });
}
