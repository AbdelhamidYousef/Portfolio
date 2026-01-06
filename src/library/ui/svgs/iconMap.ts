import type { ComponentType } from 'react';
import * as Socials from './socials';
import * as Technologies from './technologies';
import * as Interface from './interface';

/**
 * Generic icon map - automatically includes all exported icons
 * Keys are lowercase versions of the export names
 *
 * Usage: getIcon('github'), getIcon('typescript'), getIcon('checkicon')
 *
 * To add new icon sources, add imports above and spread into the array below
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, ComponentType<any>> = Object.fromEntries(
  [
    ...Object.entries(Socials),
    ...Object.entries(Technologies),
    ...Object.entries(Interface),
  ].map(([name, component]) => [name.trim().toLowerCase(), component])
);

export const getIcon = (name: string) => {
  const icon = iconMap[name.toLowerCase()];

  if (!icon) {
    console.error(`Icon component for [${name}] not found in the Icon Map`);
    return null;
  }

  return icon;
};
