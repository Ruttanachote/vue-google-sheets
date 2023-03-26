import { LockOpen } from '@vicons/tabler';
import type { ToolCategory } from './Tool';

export const category: ToolCategory[] = [


];

export const menu = category.flatMap(({ components }) => components);
export const toolsWithCategory = category.flatMap(({ components, name }) =>
  components.map((tool) => ({ category: name, ...tool })),
);