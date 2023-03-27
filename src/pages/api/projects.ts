import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "@/libs/sanity";
import { Project } from "types";

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

interface Data {
  data: Project[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data: Project[] = await sanityClient.fetch(query);
  res.status(200).json({ data });
}
