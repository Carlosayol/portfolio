import { groq } from "next-sanity";

export const projectsQuery = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

export const getProject = (pid: string) => {
  return groq`
  *[_type == "project" && slug == "${pid}"][0] {
    ...,
    technologies[]->
  }
`;
};
