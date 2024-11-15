import { Languages } from '@core/locale/domain';
import { default as English } from '@core/locale/messages/en';
import { default as Spanish } from '@core/locale/messages/es';
import { DEFAULT_LANG } from '@core/shared/const/infrastructure';
import type { JSX } from 'astro/jsx-runtime';

export const getI18N = ({
	currentLocale = DEFAULT_LANG,
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === Languages.SPANISH) return {...English, ...Spanish};
	if (currentLocale === Languages.ENGLISH) return {...Spanish, ...English};
	return Spanish;
};

type Replacements = Record<string, JSX.Element | string>;

export function customT(translation:string, replacements: Replacements = {}) {
  const regex = /{(\w+)}/g;
  const parts:(JSX.Element | string)[] = [];
  let lastIndex = 0;

  let match;
  while ((match = regex.exec(translation)) !== null) {
    if (match.index > lastIndex) {
      parts.push(translation.slice(lastIndex, match.index));
    }

    const placeholder = match[1];
    if (replacements[placeholder]) {
      parts.push(replacements[placeholder]);
    } else {
      parts.push(`{${placeholder}}`);
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < translation.length) {
    parts.push(translation.slice(lastIndex));
  }

  return parts;
}