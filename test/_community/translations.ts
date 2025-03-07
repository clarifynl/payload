import type { Config } from 'payload'
import type { NestedKeysStripped } from '@payloadcms/translations'

export const customTranslations: Config['i18n']['translations'] = {
	en: {
		custom: {
			testLabel: 'My custom english label',
		}
	},
	nl: {
		custom: {
			testLabel: 'Mijn custom nederlands label',
		}
	}
}

export type CustomTranslationsObject = typeof customTranslations.en | typeof customTranslations.nl
export type CustomTranslationsKeys = NestedKeysStripped<CustomTranslationsObject>