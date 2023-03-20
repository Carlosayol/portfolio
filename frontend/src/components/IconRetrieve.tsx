import { IoLogoDiscord, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { BiErrorCircle } from "react-icons/bi";

interface Props {
  icon: string;
}

const IconRetrieve = ({ icon }: Props) => {
  const mapIcons = new Map([
    ["github", <IoLogoGithub />],
    ["linkedin", <IoLogoLinkedin />],
    ["instagram", <IoLogoInstagram />],
    ["discord", <IoLogoDiscord />],
    ["default", <BiErrorCircle />],
  ]);

  return mapIcons.has(icon) ? mapIcons.get(icon)! : mapIcons.get("default")!;
};

export default IconRetrieve;
