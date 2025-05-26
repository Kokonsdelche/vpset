import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

// تعریف مقالات موجود
const articles = {
        'why-use-vpn-vps': {
                title: 'چرا از vpn ویا vps استفاده میکنیم؟',
                component: 'WhyUseVpnVps'
        },
        'vpn-vs-vps': {
                title: 'vpn یا vps؟',
                component: 'VpnVsVps'
        },
        'vpn-vps-simple': {
                title: 'vpn , vps به زبان ساده',
                component: 'VpnVpsSimple'
        }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
        const article = articles[params.slug as keyof typeof articles]

        if (!article) {
                notFound()
        }

        // لود کردن کامپوننت مربوط به مقاله
        const ArticleComponent = dynamic(() => import(`../${params.slug}.tsx`), {
                loading: () => <div className="min-h-screen flex items-center justify-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                </div>
        })

        return <ArticleComponent />
} 