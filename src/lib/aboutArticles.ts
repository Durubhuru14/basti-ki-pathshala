import { nanoid } from "nanoid";
import aboutFirstImage from "@/assets/about_1.webp";
import aboutSecondImage from "@/assets/about_2.webp";

interface AboutArticle {
  id: string;
  background?: string;
  heading: string;
  text: string;
  image: string;
  reverse?: boolean;
}

const aboutArticles: AboutArticle[] = [
  {
    id: nanoid(),
    background: "bg-green-50 dark:bg-green-950",
    heading:
      "Our Mission: A succinct statement outlining the core purpose and goals of your organization",
    text: "At Basti Ki Pathshala Foundation, our mission is clear: to break the barriers of education in underserved communities. We are dedicated to providing quality education to children living in slum areas, ensuring that every child has the opportunity to thrive and succeed. Our goal is to create a nurturing learning environment where every child can access the tools, resources, and support they need to unlock their full potential. Through innovative teaching methods, community engagement, and strategic partnerships, we empower children with the knowledge and skills necessary to build a brighter future for themselves and their communities. Our mission extends beyond the classroom as we work tirelessly to bridge the educational gap and foster long-term, sustainable change in the lives of marginalized families. Together, we strive to rewrite the narrative of education, one child at a time.",
    image: aboutFirstImage,
    reverse: false,
  },
  {
    id: nanoid(),
    background: "bg-yellow-50 dark:bg-yellow-950",
    heading: "Our Story",
    text: "Basti Ki Pathshala Foundation began with a simple yet powerful vision: to transform the lives of children living in slum areas through education. Founded under the Indian Societies Act of 1860, our journey started with a deep-seated belief in the potential of every child, regardless of their circumstances.It all began when Sunita, inspired by their own experiences and driven by a passion for social justice, embarked on a mission to address the educational inequalities prevalent in underserved communities. Armed with determination and fueled by compassion, they rallied a team of like-minded individuals who shared their vision of a brighter, more equitable future.From humble beginnings, our organization has grown into a beacon of hope, touching the lives of countless children and families along the way. Each milestone achieved, each barrier overcome, has only strengthened our resolve to continue our mission of empowerment and transformation.Through the years, we’ve witnessed the transformative power of education firsthand. We’ve seen shy, uncertain children blossom into confident, capable individuals, equipped with the knowledge and skills to pursue their dreams. We’ve seen communities come together, united by a shared commitment to the betterment of their children’s future.As we reflect on our journey, we are filled with gratitude for the unwavering support of our volunteers, donors, partners, and the communities we serve. Together, we have achieved so much, yet we know that our work is far from over.Our story is still being written, with each chapter filled with hope, resilience, and determination. As we look towards the future, we remain steadfast in our mission to break down barriers, uplift communities, and create a world where every child has the opportunity to thrive.",
    image: aboutSecondImage,
    reverse: true,
  },
];

export default aboutArticles;
