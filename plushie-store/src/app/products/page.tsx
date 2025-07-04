'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Heart, User, Filter } from 'lucide-react'

// Sample product data
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
    description: 'ふわふわで抱き心地抜群のクラシックなテディベアです。'
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
    description: '長い耳がチャームポイントの愛らしいうさぎのぬいぐるみです。'
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
    description: 'まん丸な目がかわいい猫のぬいぐるみ。癒し効果抜群です。'
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
    description: 'ふっくらとした体型が愛らしいパンダのぬいぐるみです。'
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
    description: '忠実で愛らしい犬のぬいぐるみ。いつでもそばにいてくれます。'
  }
]

export default function ProductsPage() {
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])

  const filteredProducts = products.filter(product => {
    const colorMatch = selectedColors.length === 0 || 
      product.colors.some(color => selectedColors.includes(color.value))
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    return colorMatch && priceMatch
  })

  const toggleColorFilter = (colorValue: string) => {
    setSelectedColors(prev => 
      prev.includes(colorValue) 
        ? prev.filter(c => c !== colorValue)
        : [...prev, colorValue]
    )
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
              <Link href="/products" className="text-pink-600 font-semibold">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Filter className="h-5 w-5 mr-2" />
                <h3 className="text-lg font-semibold">フィルター</h3>
              </div>
              
              {/* Color Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">色で絞り込み</h4>
                <div className="space-y-2">
                  {Array.from(new Set(products.flatMap(p => p.colors.map(c => c.value)))).map(colorValue => {
                    const colorInfo = products.flatMap(p => p.colors).find(c => c.value === colorValue)
                    return (
                      <label key={colorValue} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(colorValue)}
                          onChange={() => toggleColorFilter(colorValue)}
                          className="mr-2"
                        />
                        <div 
                          className="w-4 h-4 rounded-full mr-2 border"
                          style={{ backgroundColor: colorInfo?.hex }}
                        />
                        <span className="text-sm">{colorInfo?.name}</span>
                      </label>
                    )
                  })}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">価格帯</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 0 && priceRange[1] === 5000}
                      onChange={() => setPriceRange([0, 5000])}
                      className="mr-2"
                    />
                    <span className="text-sm">すべて</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 0 && priceRange[1] === 2500}
                      onChange={() => setPriceRange([0, 2500])}
                      className="mr-2"
                    />
                    <span className="text-sm">¥2,500以下</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 2500 && priceRange[1] === 3000}
                      onChange={() => setPriceRange([2500, 3000])}
                      className="mr-2"
                    />
                    <span className="text-sm">¥2,500 - ¥3,000</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 3000 && priceRange[1] === 5000}
                      onChange={() => setPriceRange([3000, 5000])}
                      className="mr-2"
                    />
                    <span className="text-sm">¥3,000以上</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900">商品一覧</h1>
              <p className="text-gray-600">{filteredProducts.length}件の商品</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <div className="h-64 bg-gray-100 flex items-center justify-center">
                    <span className="text-8xl">{product.image}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {product.description}
                    </p>
                    <p className="text-2xl font-bold text-pink-600 mb-3">
                      ¥{product.price.toLocaleString()}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.colors.map((color) => (
                        <div
                          key={color.value}
                          className="w-6 h-6 rounded-full border-2 border-gray-300"
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                    </div>
                    <Link
                      href={`/products/${product.id}`}
                      className="block w-full bg-pink-600 text-white text-center py-2 rounded-lg hover:bg-pink-700 transition duration-300"
                    >
                      詳細を見る
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">条件に合う商品が見つかりませんでした。</p>
                <button
                  onClick={() => {
                    setSelectedColors([])
                    setPriceRange([0, 5000])
                  }}
                  className="mt-4 text-pink-600 hover:text-pink-700"
                >
                  フィルターをリセット
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}