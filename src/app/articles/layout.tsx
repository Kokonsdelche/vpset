export default function ArticlesLayout({
        children,
}: {
        children: React.ReactNode
}) {
        return (
                <div className="min-h-screen bg-gray-950">
                        {children}
                </div>
        )
} 