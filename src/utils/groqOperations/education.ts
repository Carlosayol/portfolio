import { groq } from "next-sanity";

export const educationQuery = groq`
  *[_type == "education"]
`;
