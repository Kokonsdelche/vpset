import Link from 'next/link'
import Image from 'next/image'

export default function ArticlesPage() {
        return (
                <div className="min-h-screen py-20">
                        <div className="container mx-auto px-4">
                                <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                                        مقالات آموزشی
                                </h1>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {/* مقاله اول */}
                                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                                <div className="relative w-full h-48">
                                                        <Image
                                                                src="/images/vpn-security.jpg"
                                                                alt="امنیت VPN"
                                                                fill
                                                                className="object-cover"
                                                                priority
                                                        />
                                                </div>
                                                <div className="p-6">
                                                        <h2 className="text-xl font-bold mb-4">چرا از vpn ویا vps استفاده میکنیم؟</h2>
                                                        <p className="text-gray-300 mb-4">
                                                                بررسی اهمیت استفاده از VPN و VPS برای تریدرها و معامله‌گران
                                                        </p>
                                                        <div className="flex justify-between items-center">
                                                                <span className="text-sm text-gray-400">۲۴ فروردین ۱۴۰۳</span>
                                                                <Link href="/articles/why-use-vpn-vps" className="text-blue-400 hover:text-blue-300">
                                                                        ادامه مطلب →
                                                                </Link>
                                                        </div>
                                                </div>
                                        </div>

                                        {/* مقاله دوم */}
                                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                                <div className="relative w-full h-48">
                                                        <Image
                                                                src="/images/vpn-vs-vps.jpg"
                                                                alt="مقایسه VPN و VPS"
                                                                fill
                                                                className="object-cover"
                                                                priority
                                                        />
                                                </div>
                                                <div className="p-6">
                                                        <h2 className="text-xl font-bold mb-4">vpn یا vps؟</h2>
                                                        <p className="text-gray-300 mb-4">
                                                                مقایسه کامل VPN و VPS برای انتخاب بهترین گزینه
                                                        </p>
                                                        <div className="flex justify-between items-center">
                                                                <span className="text-sm text-gray-400">۲۳ فروردین ۱۴۰۳</span>
                                                                <Link href="/articles/vpn-vs-vps" className="text-blue-400 hover:text-blue-300">
                                                                        ادامه مطلب →
                                                                </Link>
                                                        </div>
                                                </div>
                                        </div>

                                        {/* مقاله سوم */}
                                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                                <div className="relative w-full h-48">
                                                        <Image
                                                                src="/images/vpn-vps-basics.jpg"
                                                                alt="مفاهیم پایه VPN و VPS"
                                                                fill
                                                                className="object-cover"
                                                                priority
                                                        />
                                                </div>
                                                <div className="p-6">
                                                        <h2 className="text-xl font-bold mb-4">vpn , vps به زبان ساده</h2>
                                                        <p className="text-gray-300 mb-4">
                                                                توضیح مفاهیم پایه VPN و VPS به زبان ساده
                                                        </p>
                                                        <div className="flex justify-between items-center">
                                                                <span className="text-sm text-gray-400">۲۲ فروردین ۱۴۰۳</span>
                                                                <Link href="/articles/vpn-vps-simple" className="text-blue-400 hover:text-blue-300">
                                                                        ادامه مطلب →
                                                                </Link>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
} 