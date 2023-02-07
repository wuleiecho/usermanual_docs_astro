export const SITE = {
	title: 'ImageX训练平台使用手册',
	description: 'Your website description.',
//	defaultLanguage: 'en_US',
    defaultLanguage: 'zh_CN',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
    Chinese: 'zh',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Introduction': [
			{ text: '功能简介', link: 'en/1-功能简介' },
			{ text: '图像分类使用说明', link: 'en/2-图像分类使用说明' },
			{ text: '目标检测使用说明', link: 'en/3-目标检测使用说明' },
			{ text: '语义分割使用说明', link: 'en/4-语义分割使用说明' },
			// { text: 'Page 2', link: 'en/page-2' },
			// { text: 'Page 3', link: 'en/page-3' },
			// { text: 'Unit使用方式', link: 'en/page-1' },
		],
		// 'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
	},
    zh: {
        '参考文档': [
            { text: '功能简介', link: 'zh/1-功能简介' },
			{ text: '图像分类使用说明', link: 'zh/2-图像分类使用说明' },
			{ text: '目标检测使用说明', link: 'zh/3-目标检测使用说明' },
			{ text: '语义分割使用说明', link: 'zh/4-语义分割使用说明' },
            // { text: 'Page 2', link: 'zh/page-2' },
            // { text: 'Page 3', link: 'zh/page-3' },
			// { text: 'Unit使用方式', link: 'zh/page-1' },
            ],
        // 'Another Section': [{ text: 'Page 4', link: 'zh/page-4' }],
    },
};
