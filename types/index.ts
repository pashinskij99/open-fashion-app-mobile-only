export enum APP_ROUTES {
    HOME = '/',
    ABOUT = '/about',
    CONTACT = '/contact',
    BLOG = '/blog',
}

export interface IFooterSocialList {
    id: number
    icon: JSX.Element
}
export interface IFooterNavPagesList {
    id: number
    name: string
    link: APP_ROUTES
}