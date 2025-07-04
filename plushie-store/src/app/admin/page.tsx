'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Plus, 
  Edit, 
  Trash2,
  Eye,
  Settings
} from 'lucide-react'

// Sample data (in a real app, this would come from a database)
const sampleProducts = [
  { id: 1, name: 'クラシックテディベア', price: 2980, stock: 15, sold: 45 },
  { id: 2, name: 'ふわふわうさぎ', price: 2480, stock: 12, sold: 32 },
  { id: 3, name: 'にゃんこフレンド', price: 2680, stock: 8, sold: 28 },
  { id: 4, name: 'ぽんぽんパンダ', price: 3280, stock: 6, sold: 18 },
  { id: 5, name: 'わんわんバディ', price: 2780, stock: 10, sold: 25 }
]

const sampleOrders = [
  { id: 1001, customer: '田中太郎', total: 5960, status: '配送中', date: '2025-07-01' },
  { id: 1002, customer: '佐藤花子', total: 2480, status: '処理中', date: '2025-07-02' },
  { id: 1003, customer: '鈴木一郎', total: 8240, status: '完了', date: '2025-07-01' },
  { id: 1004, customer: '高橋美咲', total: 2680, status: '処理中', date: '2025-07-03' },
  { id: 1005, customer: '山田健太', total: 5560, status: '配送中', date: '2025-07-02' }
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const totalRevenue = sampleOrders.reduce((sum, order) => sum + order.total, 0)
  const totalProducts = sampleProducts.length
  const totalOrders = sampleOrders.length
  const totalCustomers = new Set(sampleOrders.map(order => order.customer)).size

  const getStatusColor = (status: string) => {
    switch (status) {
      case '完了': return 'bg-green-100 text-green-800'
      case '配送中': return 'bg-blue-100 text-blue-800'
      case '処理中': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-pink-600">
                🧸 Plushie Store
              </Link>
              <span className="ml-4 px-3 py-1 bg-pink-100 text-pink-800 text-sm font-medium rounded-full">
                管理者画面
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-pink-600">
                サイトを見る
              </Link>
              <button className="text-gray-600 hover:text-pink-600">
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <nav className="bg-white rounded-lg shadow-md p-4">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full flex items-center px-4 py-2 rounded-lg text-left ${
                      activeTab === 'dashboard' 
                        ? 'bg-pink-100 text-pink-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <BarChart3 className="h-5 w-5 mr-3" />
                    ダッシュボード
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('products')}
                    className={`w-full flex items-center px-4 py-2 rounded-lg text-left ${
                      activeTab === 'products' 
                        ? 'bg-pink-100 text-pink-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Package className="h-5 w-5 mr-3" />
                    商品管理
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`w-full flex items-center px-4 py-2 rounded-lg text-left ${
                      activeTab === 'orders' 
                        ? 'bg-pink-100 text-pink-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <ShoppingCart className="h-5 w-5 mr-3" />
                    注文管理
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('customers')}
                    className={`w-full flex items-center px-4 py-2 rounded-lg text-left ${
                      activeTab === 'customers' 
                        ? 'bg-pink-100 text-pink-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Users className="h-5 w-5 mr-3" />
                    顧客管理
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">ダッシュボード</h1>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-green-100 rounded-full">
                        <BarChart3 className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">総売上</p>
                        <p className="text-2xl font-bold text-gray-900">
                          ¥{totalRevenue.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Package className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">商品数</p>
                        <p className="text-2xl font-bold text-gray-900">{totalProducts}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-yellow-100 rounded-full">
                        <ShoppingCart className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">注文数</p>
                        <p className="text-2xl font-bold text-gray-900">{totalOrders}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-purple-100 rounded-full">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">顧客数</p>
                        <p className="text-2xl font-bold text-gray-900">{totalCustomers}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">最近の注文</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">注文ID</th>
                          <th className="text-left py-2">顧客名</th>
                          <th className="text-left py-2">金額</th>
                          <th className="text-left py-2">ステータス</th>
                          <th className="text-left py-2">日付</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sampleOrders.slice(0, 5).map((order) => (
                          <tr key={order.id} className="border-b">
                            <td className="py-2">#{order.id}</td>
                            <td className="py-2">{order.customer}</td>
                            <td className="py-2">¥{order.total.toLocaleString()}</td>
                            <td className="py-2">
                              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="py-2">{order.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-bold text-gray-900">商品管理</h1>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    新商品追加
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-3 px-4">商品名</th>
                        <th className="text-left py-3 px-4">価格</th>
                        <th className="text-left py-3 px-4">在庫</th>
                        <th className="text-left py-3 px-4">売上数</th>
                        <th className="text-left py-3 px-4">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleProducts.map((product) => (
                        <tr key={product.id} className="border-b">
                          <td className="py-3 px-4 font-medium">{product.name}</td>
                          <td className="py-3 px-4">¥{product.price.toLocaleString()}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              product.stock < 10 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                            }`}>
                              {product.stock}個
                            </span>
                          </td>
                          <td className="py-3 px-4">{product.sold}個</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-800">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="text-green-600 hover:text-green-800">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-800">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">注文管理</h1>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-3 px-4">注文ID</th>
                        <th className="text-left py-3 px-4">顧客名</th>
                        <th className="text-left py-3 px-4">金額</th>
                        <th className="text-left py-3 px-4">ステータス</th>
                        <th className="text-left py-3 px-4">注文日</th>
                        <th className="text-left py-3 px-4">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleOrders.map((order) => (
                        <tr key={order.id} className="border-b">
                          <td className="py-3 px-4 font-medium">#{order.id}</td>
                          <td className="py-3 px-4">{order.customer}</td>
                          <td className="py-3 px-4">¥{order.total.toLocaleString()}</td>
                          <td className="py-3 px-4">
                            <select 
                              defaultValue={order.status}
                              className={`px-2 py-1 rounded-full text-xs border-0 ${getStatusColor(order.status)}`}
                            >
                              <option value="処理中">処理中</option>
                              <option value="配送中">配送中</option>
                              <option value="完了">完了</option>
                            </select>
                          </td>
                          <td className="py-3 px-4">{order.date}</td>
                          <td className="py-3 px-4">
                            <button className="text-blue-600 hover:text-blue-800">
                              <Eye className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Customers Tab */}
            {activeTab === 'customers' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">顧客管理</h1>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-600">顧客管理機能は開発中です。</p>
                  <p className="text-sm text-gray-500 mt-2">
                    顧客一覧、購入履歴、お気に入り商品などの機能を追加予定です。
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}