export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: string;
  icon: string;
}

export interface Strength {
  title: string;
  description: string;
  icon: string;
}

export interface Hobby {
  titleEn: string;
  titleJa: string;
  descriptionEn: string;
  descriptionJa: string;
  image: string;
}

export interface Certification {
  category: string;
  title: string;
  year: number;
  icon: string;
}
