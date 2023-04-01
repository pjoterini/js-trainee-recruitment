import { AnimalProps } from "@/pages";

export const Link = ({ header, active }: AnimalProps & { active: boolean }) => {
  return (
    <a href={`#${header}`}>
      <li style={active ? { color: "red" } : undefined}>{header}</li>
    </a>
  );
};
