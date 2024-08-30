export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-purple-100 font-sans flex flex-col">
      {children}
    </div>
  )
}
