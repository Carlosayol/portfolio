import { IoLogoDiscord, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { BiErrorCircle } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import {
  SiAmazonaws,
  SiCss3,
  SiCypress,
  SiDjango,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGoland,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRust,
  SiSelenium,
  SiServerless,
  SiShopify,
  SiSwagger,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

interface Props {
  icon: string;
}

const IconRetrieve = ({ icon }: Props) => {
  const mapIcons = new Map([
    ["github", <IoLogoGithub />],
    ["linkedin", <IoLogoLinkedin />],
    ["instagram", <IoLogoInstagram />],
    ["discord", <IoLogoDiscord />],
    ["swagger", <SiSwagger />],
    ["expo", <SiExpo />],
    ["azure", <SiMicrosoftazure />],
    ["firebase", <SiFirebase />],
    ["kubernetes", <SiKubernetes />],
    ["rust", <SiRust />],
    ["shopify", <SiShopify />],
    ["terraform", <SiTerraform />],
    ["serverless", <SiServerless />],
    ["aws", <SiAmazonaws />],
    ["docker", <SiDocker />],
    ["git", <SiGit />],
    ["jest", <SiJest />],
    ["cypress", <SiCypress />],
    ["selenium", <SiSelenium />],
    ["rest", <TbApi />],
    ["graphql", <SiGraphql />],
    ["postgres", <SiPostgresql />],
    ["mongo", <SiMongodb />],
    ["mysql", <SiMysql />],
    ["go", <SiGoland />],
    ["java", <FaJava />],
    ["django", <SiDjango />],
    ["flask", <SiFlask />],
    ["python", <SiPython />],
    ["express", <SiExpress />],
    ["nest", <SiNestjs />],
    ["node", <SiNodedotjs />],
    ["react", <SiReact />],
    ["react_native", <TbBrandReactNative />],
    ["next", <SiNextdotjs />],
    ["typescript", <SiTypescript />],
    ["javascript", <SiJavascript />],
    ["html", <SiHtml5 />],
    ["css", <SiCss3 />],
    ["default", <BiErrorCircle />],
  ]);

  return mapIcons.has(icon) ? mapIcons.get(icon)! : mapIcons.get("default")!;
};

export default IconRetrieve;
