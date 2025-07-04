import { products } from '@/lib/data'
import ProductDetailClient from './ProductDetailClient'

// Generate static params for all product IDs
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const productId = parseInt(id)
  const product = products.find(p => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">商品が見つかりません</h1>
          <a href="/products" className="text-pink-600 hover:text-pink-700">
            商品一覧に戻る
          </a>
        </div>
      </div>
    )
  }

  return <ProductDetailClient product={product} />
}