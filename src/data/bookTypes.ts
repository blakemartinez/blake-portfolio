import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  genres: string[];
  rating?: number;
  review?: string;
  whyReading?: string;
  year?: number;
  status: 'reading' | 'done' | 'backlog';
  series?: string;
  seriesNumber?: number;
}

export const GENRE_COLORS: Record<string, string> = {
  'Sci-Fi': '#6b9e8a',
  Fantasy: '#8e7ba4',
  Mystery: '#7a6e8a',
  Tech: '#7aab6e',
  'Non-fiction': '#c4935a',
  Fiction: '#b07a8a',
  Biography: '#6a9e9e',
};

export const ALL_GENRES = Object.keys(GENRE_COLORS);

export function getBooks(): Book[] {
  const filePath = path.join(process.cwd(), 'src', 'data', 'books.yaml');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = yaml.load(raw) as Book[];
  return parsed.map((book) => ({
    ...book,
    review: book.review?.trim(),
    whyReading: book.whyReading?.trim(),
  }));
}
