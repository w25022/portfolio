export interface Project {
  titleEn: string;
  titleJa: string;
  descriptionEn: string;
  descriptionJa: string;
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
  titleEn: string;
  titleJa: string;
  descriptionEn: string;
  descriptionJa: string;
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
