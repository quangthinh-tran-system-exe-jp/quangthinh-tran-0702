import Link from 'next/link'
import { ShoppingBag, Heart, User } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-pink-600">
                🧸 Plushie Store
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/products" className="text-gray-700 hover:text-pink-600">
                商品一覧
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-600">
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-pink-600">
                <Heart className="h-6 w-6" />
              </button>
              <button className="text-gray-700 hover:text-pink-600">
                <ShoppingBag className="h-6 w-6" />
              </button>
              <Link href="/login" className="text-gray-700 hover:text-pink-600">
                <User className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            かわいいぬいぐるみの
            <span className="text-pink-600">専門店</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            お好みの色が選べる、ふわふわで愛らしいぬいぐるみたちがあなたを待っています
          </p>
          <Link
            href="/products"
            className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300"
          >
            商品を見る
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            人気商品
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Product Cards */}
            {[
              { name: 'テディベア', price: '¥2,980', colors: ['茶色', 'ベージュ', 'ピンク'] },
              { name: 'うさぎちゃん', price: '¥2,480', colors: ['白', 'グレー', 'ピンク'] },
              { name: 'ねこちゃん', price: '¥2,680', colors: ['黒', '白', 'オレンジ'] },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">🧸</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-pink-600 mb-3">
                    {product.price}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.colors.map((color, colorIndex) => (
                      <span
                        key={colorIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300">
                    詳細を見る
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🧸 Plushie Store</h3>
              <p className="text-gray-300">
                かわいいぬいぐるみの専門店です。お気に入りの色を選んで、特別な一体を見つけてください。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">リンク</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-gray-300 hover:text-white">商品一覧</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">お問い合わせ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">サポート</h4>
              <ul className="space-y-2">
                <li><Link href="/shipping" className="text-gray-300 hover:text-white">配送について</Link></li>
                <li><Link href="/returns" className="text-gray-300 hover:text-white">返品・交換</Link></li>
                <li><Link href="/faq" className="text-gray-300 hover:text-white">よくある質問</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">© 2025 Plushie Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}