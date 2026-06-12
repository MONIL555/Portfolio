import { getProject } from '@theatre/core';

export const heroProject = getProject('Portfolio');
export const heroSheet = heroProject.sheet('Hero');

export const theatreObjects = {
  eyebrow: heroSheet.object('Eyebrow', { opacity: 0, y: 20 }),
  name: heroSheet.object('Name', { opacity: 0, y: 20 }),
  tagline: heroSheet.object('Tagline', { opacity: 0, y: 20 }),
  chips: heroSheet.object('Chips', { opacity: 0, y: 20 }),
  buttons: heroSheet.object('Buttons', { opacity: 0, y: 20 }),
  socials: heroSheet.object('Socials', { opacity: 0, y: 20 }),
};
