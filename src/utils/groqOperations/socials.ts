import { groq } from "next-sanity";

export const socialsQuery = groq`
  *[_type == "social"]
`;
