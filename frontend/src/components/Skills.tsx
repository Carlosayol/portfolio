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

const calculateSkillSet = (skills: Skill[]): Partial<SkillSet> => {
  const skillSet: Partial<SkillSet> = {};
  skillSet.expert = { rank: SkillRank.Expert, skills: skills.filter((skill) => skill.level === SkillLevel.Expert) };
  skillSet.proficient = {
    rank: SkillRank.Proficient,
    skills: skills.filter((skill) => skill.level === SkillLevel.Proficient),
  };
  skillSet.beginner = {
    rank: SkillRank.Beginner,
    skills: skills.filter((skill) => skill.level === SkillLevel.Beginner),
  };
  skillSet.want_to_learn = {
    rank: SkillRank.WantToLearn,
    skills: skills.filter((skill) => skill.level === SkillLevel.WantToLearn),
  };

  return skillSet;
};

const Skills = ({ skills }: Props) => {
  const skillSet = calculateSkillSet(skills);

  return (
    <Box>
      {Object.entries(skillSet).map(([key, value], index) => {
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
