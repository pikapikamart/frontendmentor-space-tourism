export interface Destination {
  name: string,
  images: {
    png: string,
    webp: string
  },
  description: string,
  distance: string,
  travel: string
}

export interface Crew {
  name: string,
  images: {
    pgn: string,
    webp: string
  },
  role: string,
  bio: string
}

export interface Technology {
  name: string,
  images: {
    portrait: string,
    landscape: string
  },
  description: string
}

export interface SpaceDataShape {
  destinations: Destination[],
  crew: Crew[],
  technology: Technology[]
}

interface TargetDataset extends HTMLButtonElement {
  index: number
}

export interface EventButton extends React.MouseEvent<HTMLButtonElement, MouseEvent> {
  target: TargetDataset
}