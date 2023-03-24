import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "../../../../sanity";
import { Project } from "types";

const buildQuery = (pid: string) => {
  return groq`
  *[_type == "project" && slug == "${pid}"][0] {
    ...,
    technologies[]->
  }
`;
};

interface Data {
  data: Project;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { pid } = req.query as { pid: string };
  const data: Project = await sanityClient.fetch(buildQuery(pid));
  res.status(200).json({ data });
}
