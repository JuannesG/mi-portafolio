export interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  admin: Screenshot[];
  client: Screenshot[];
}
