export interface Social {
  name: string;
  url: string;
  copy: boolean; // If copy is true, the url will be copied to the clipboard
  icon: JSX.Element;
}

export interface Work {
  place: string;
  timeline: string;
  position: string;
}

export interface Research {
  title: string;
  authors: string;
  metadata: string;
  link: string;
  imagePath: string; // in `/public/research/`
}
