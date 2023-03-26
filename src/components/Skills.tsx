import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

import SkillIcon from "@/components/SkillIcon";
import { Skill, SkillLevel, SkillRank } from "../../types.d";

interface Props {
  skills: Skill[];
}

type SkillSet = {
  [x in SkillLevel]: SkillEntry;
};

type SkillEntry = {
  skills: Skill[];
  rank: number;
};

const getSkillRank = (skillLevel: string): number => {
  switch (skillLevel) {
    case SkillLevel.Beginner:
      return SkillRank.Beginner;
    case SkillLevel.Proficient:
      return SkillRank.Proficient;
    case SkillLevel.Expert:
      return SkillRank.Expert;
    default:
      return SkillRank.WantToLearn;
  }
};

const calculateSkillSet = (skills: Skill[]): Partial<SkillSet> => {
  const skillSet: Partial<SkillSet> = {};

  for (const skill of skills) {
    if (skillSet[skill.level]) {
      skillSet[skill.level]?.skills.push(skill);
    } else {
      skillSet[skill.level] = { rank: getSkillRank(skill.level), skills: [skill] };
    }
  }

  return skillSet;
};

const Skills = ({ skills }: Props) => {
  const skillSet = calculateSkillSet(skills);

  return (
    <Box>
      {Object.entries(skillSet)
        .sort(([, a], [, b]) => a.rank - b.rank)
        .map(([key, value], index) => {
          return (
            <Box key={index}>
              <Heading as="h3" fontSize={20} my={6} textTransform="capitalize">
                {key.replaceAll("_", " ")}
              </Heading>
              <SimpleGrid columns={4} gap={2} spacingY={8}>
                {value.skills.map((skill) => (
                  <SkillIcon key={skill?._id} title={skill.title} slug={skill.slug} />
                ))}
              </SimpleGrid>
            </Box>
          );
        })}
    </Box>
  );
};

export default Skills;
