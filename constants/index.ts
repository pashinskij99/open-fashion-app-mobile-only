import { APP_ROUTES, IFooterNavPagesList, IFooterSocialList } from '../types'
import { InstagramSvg, TwitterSvg, YoutubeSvg } from '../assets/icons'

export const firstScreenTitleArray = ['Luxury', 'Fashion', '&Accessories']
export const firstScreenBtnText = 'Explore Collection'

export const footerSocialList: IFooterSocialList[] = [
    { id: 0, icon: TwitterSvg },
    { id: 1, icon: InstagramSvg },
    { id: 2, icon: YoutubeSvg },
]
export const footerNavPagesList: IFooterNavPagesList[] = [
    { id: 0, name: 'About', link: APP_ROUTES.ABOUT },
    { id: 1, name: 'Contact', link: APP_ROUTES.CONTACT },
    { id: 2, name: 'Blog', link: APP_ROUTES.BLOG },
]
