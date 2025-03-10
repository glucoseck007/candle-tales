import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
      <p className="text-lg mb-8">We couldn't find the zodiac candle you're looking for.</p>
      <Link href="/" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
        Return to Home
      </Link>
    </div>
  )
}

