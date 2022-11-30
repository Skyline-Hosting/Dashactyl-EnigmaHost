import { prisma } from '~/db.server';
import config from '~/config.server';

export type { Settings } from '@prisma/client';

export async function getSettings() {
  if (!config.key) throw new Error('Environment variable DASH_APP_KEY not set');

  const data = await prisma.settings.findUnique({ where: { key: config.key } });
  if (!data) throw new Error('App settings not found');

  return data;
}

export async function getPanelSettings(): Promise<[string, string]> {
  const set = await getSettings();
  if (!set.panelURL || !set.panelKey)
    throw new Error('Panel URL or key is not set');

  return [set.panelURL, set.panelKey];
}

export function initSettings() {
  return prisma.settings.create({ data: {} });
}

// export function updatePanelSettings(url: string, key: string);
