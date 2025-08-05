import { nanoid } from "nanoid";
import { HandFist, HeartHandshake, Soup, Users } from "lucide-react";

const aboutStats = [
  {
    id: nanoid(),
    icon: <HeartHandshake className="size-20 select-none text-accent" />,
    startingNumber: 0,
    finalNumber: 31245,
    text: "Lives Changed",
  },
  {
    id: nanoid(),
    icon: <Soup className="size-20 select-none text-accent" />,
    startingNumber: 0,
    finalNumber: 28976,
    text: "Meals Served",
  },
  {
    id: nanoid(),
    icon: <Users className="size-20 select-none text-accent" />,
    startingNumber: 0,
    finalNumber: 19854,
    text: "Interns",
  },
  {
    id: nanoid(),
    icon: <HandFist className="size-20 select-none text-accent" />,
    startingNumber: 0,
    finalNumber: 10989,
    text: "Supporters",
  },
];

export default aboutStats;
