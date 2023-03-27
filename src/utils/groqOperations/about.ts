import { groq } from "next-sanity";

export const aboutQuery = groq`
  *[_type == "about"][0] {
    ...,
    "cvURL": cv.asset->url
  }
`;
