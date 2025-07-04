'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Heart, User, ArrowLeft, Plus, Minus } from 'lucide-react'

// Sample product data (in a real app, this would come from a database)
const products = [
  {
    id: 1,
    name: 'クラシックテディベア',
    price: 2980,
    colors: [
      { name: '茶色', value: 'brown', hex: '#8B4513' },
      { name: 'ベージュ', value: 'beige', hex: '#F5F5DC' },
      { name: 'ピンク', value: 'pink', hex: '#FFB6C1' },
      { name: '白', value: 'white', hex: '#FFFFFF' }
    ],
    image: '🧸',
    description: 'ふわふわで抱き心地抜群のクラシックなテディベアです。高品質な素材を使用し、長く愛用していただけます。',
    features: ['高品質素材', '手洗い可能', 'CE認証済み', 'ギフト包装対応'],
    size: '高さ30cm',
    stock: 15
  },
  {
    id: 2,
    name: 'ふわふわうさぎ',
    price: 2480,
    colors: [
      { name: '白', value: 'white', hex: '#FFFFFF' },
      { name: 'グレー', value: 'gray', hex: '#808080' },
      { name: 'ピンク', value: 'pink', hex: '#FFB6C1' },
      { name: 'ラベンダー', value: 'lavender', hex: '#E6E6FA' }
    ],
    image: '🐰',
    description: '長い耳がチャームポイントの愛らしいうさぎのぬいぐるみです。ふわふわの毛質で触り心地抜群です。',
    features: ['超ソフト素材', '手洗い可能', 'アレルギー対応', 'ギフト包装対応'],
    size: '高さ25cm',
    stock: 12
  },
  {
    id: 3,
    name: 'にゃんこフレンド',
    price: 2680,
    colors: [
      { name: '黒', value: 'black', hex: '#000000' },
      { name: '白', value: 'white', hex: '#FFFFFF' },
      { name: 'オレンジ', value: 'orange', hex: '#FFA500' },
      { name: 'グレー', value: 'gray', hex: '#808080' }
    ],
    image: '🐱',
    description: 'まん丸な目がかわいい猫のぬいぐるみ。癒し効果抜群で、お部屋のインテリアとしても最適です。',
    features: ['まん丸な目', '手洗い可能', '安全素材', 'ギフト包装対応'],
    size: '高さ28cm',
    stock: 8
  },
  {
    id: 4,
    name: 'ぽんぽんパンダ',
    price: 3280,
    colors: [
      { name: '白黒', value: 'panda', hex: '#000000' },
      { name: 'ピンク', value: 'pink', hex: '#FFB6C1' },
      { name: 'ブルー', value: 'blue', hex: '#87CEEB' }
    ],
    image: '🐼',
    description: 'ふっくらとした体型が愛らしいパンダのぬいぐるみです。抱きしめたくなる可愛さです。',
    features: ['ふっくら体型', '手洗い可能', 'エコ素材', 'ギフト包装対応'],
    size: '高さ32cm',
    stock: 6
  },
  {
    id: 5,
    name: 'わんわんバディ',
    price: 2780,
    colors: [
      { name: '茶色', value: 'brown', hex: '#8B4513' },
      { name: '白', value: 'white', hex: '#FFFFFF' },
      { name: '黒', value: 'black', hex: '#000000' },
      { name: 'ゴールド', value: 'gold', hex: '#FFD700' }
    ],
    image: '🐶',
    description: '忠実で愛らしい犬のぬいぐるみ。いつでもそばにいてくれる最高のパートナーです。',
    features: ['リアルな表情', '手洗い可能', '耐久性抜群', 'ギフト包装対応'],
    size: '高さ29cm',
    stock: 10
  }
]

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const productId = parseInt(id)
  const product = products.find(p => p.id === productId)
  
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || null)
  const [quantity, setQuantity] = useState(1)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">商品が見つかりません</h1>
          <Link href="/products" className="text-pink-600 hover:text-pink-700">
            商品一覧に戻る
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    // In a real app, this would add to cart state/context
    setIsAddedToCart(true)
    setTimeout(() => setIsAddedToCart(false), 2000)
  }

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
              <button className="text-gray-700 hover:text-pink-600 relative">
                <ShoppingBag className="h-6 w-6" />
                {isAddedToCart && (
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    1
                  </span>
                )}
              </button>
              <Link href="/login" className="text-gray-700 hover:text-pink-600">
                <User className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link href="/products" className="flex items-center text-gray-600 hover:text-pink-600">
            <ArrowLeft className="h-4 w-4 mr-2" />
            商品一覧に戻る
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="aspect-square flex items-center justify-center bg-gray-50 rounded-lg">
              <span className="text-9xl">{product.image}</span>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-4xl font-bold text-pink-600">¥{product.price.toLocaleString()}</p>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">色を選択</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition duration-200 ${
                      selectedColor?.value === color.value
                        ? 'border-pink-600 bg-pink-50'
                        : 'border-gray-300 hover:border-pink-300'
                    }`}
                  >
                    <div
                      className="w-6 h-6 rounded-full border"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-sm font-medium">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">数量</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 rounded-lg border border-gray-300 hover:border-pink-300"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="p-2 rounded-lg border border-gray-300 hover:border-pink-300"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">在庫: {product.stock}個</p>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition duration-300 ${
                isAddedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-pink-600 text-white hover:bg-pink-700'
              }`}
            >
              {isAddedToCart ? 'カートに追加しました！' : 'カートに追加'}
            </button>

            {/* Product Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">商品の特徴</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Details */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">商品詳細</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">サイズ:</span>
                  <span className="font-medium">{product.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">選択中の色:</span>
                  <span className="font-medium">{selectedColor?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">合計金額:</span>
                  <span className="font-bold text-pink-600">
                    ¥{(product.price * quantity).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}