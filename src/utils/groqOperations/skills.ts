import { groq } from "next-sanity";

export const skillsQuery = groq`
  *[_type == "skill"]
`;
