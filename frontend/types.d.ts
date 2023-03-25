interface SanitiyBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export enum SkillLevel {
  Expert = "expert",
  Proficient = "proficient",
  Beginner = "beginner",
  WantToLearn = "want_to_learn",
}

export enum SkillRank {
  Expert = 0,
  Proficient = 1,
  Beginner = 2,
  WantToLearn = 3,
}

export interface About extends SanitiyBody {
  _type: "about";
  name: string;
  role: string;
  heroImage: Image;
  profile: string;
  likes: string[];
  email: string;
  phone: string;
  cvURL: string;
}

export interface Skill extends SanitiyBody {
  _type: "skill";
  title: string;
  slug: string;
  level: SkillLevel;
}

export interface Social extends SanitiyBody {
  _type: "social";
  title: string;
  slug: string;
  url: string;
}

export interface Language extends SanitiyBody {
  _type: "language";
  title: string;
  level: string;
}

export interface Project extends SanitiyBody {
  _type: "project";
  title: string;
  image: Image;
  description: string;
  briefDescription: string;
  year: string;
  technologies: Skill[];
  features: string[];
  urlGithub: string;
  slug: string;
}

export interface Experience extends SanitiyBody {
  _type: "experience";
  title: string;
  location: string;
  dateStarted: Date;
  dateEnded: Date;
  isPresent: boolean;
  points: string[];
}

export interface Education extends SanitiyBody {
  _type: "education";
  title: string;
  location: string;
  description: string;
  timeline: string;
}
