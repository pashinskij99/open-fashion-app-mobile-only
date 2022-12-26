import 'normalize.css'
import '../styles/index.scss'
import type { AppProps } from 'next/app'
import { Tenor_Sans } from '@next/font/google'
import clsx from 'clsx'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/header'
import Footer from '../components/footer'

const tenorFont = Tenor_Sans({ weight: '400' })

export default function App({ Component, pageProps }: AppProps) {
    const containerRef = useRef(null)
    const { asPath } = useRouter()

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
            }}
            watch={[]}
            location={asPath}
            containerRef={containerRef}
        >
            <div data-scroll-container ref={containerRef} className={clsx(tenorFont.className, 'app')}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
        </LocomotiveScrollProvider>
    )
}
