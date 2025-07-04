export interface Color {
  name: string
  value: string
  hex: string
}

export interface Product {
  id: number
  name: string
  price: number
  colors: Color[]
  image: string
  description: string
  features: string[]
  size: string
  stock: number
}

export interface Order {
  id: number
  customer: string
  total: number
  status: '処理中' | '配送中' | '完了'
  date: string
  items: OrderItem[]
}

export interface OrderItem {
  productId: number
  productName: string
  color: string
  quantity: number
  price: number
}

export interface User {
  id: number
  name: string
  email: string
  isAdmin: boolean
  createdAt: string
}

// Sample product data
export const products: Product[] = [
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

// Sample order data
export const orders: Order[] = [
  {
    id: 1001,
    customer: '田中太郎',
    total: 5960,
    status: '配送中',
    date: '2025-07-01',
    items: [
      { productId: 1, productName: 'クラシックテディベア', color: '茶色', quantity: 2, price: 2980 }
    ]
  },
  {
    id: 1002,
    customer: '佐藤花子',
    total: 2480,
    status: '処理中',
    date: '2025-07-02',
    items: [
      { productId: 2, productName: 'ふわふわうさぎ', color: '白', quantity: 1, price: 2480 }
    ]
  },
  {
    id: 1003,
    customer: '鈴木一郎',
    total: 8240,
    status: '完了',
    date: '2025-07-01',
    items: [
      { productId: 1, productName: 'クラシックテディベア', color: 'ピンク', quantity: 1, price: 2980 },
      { productId: 3, productName: 'にゃんこフレンド', color: '黒', quantity: 2, price: 2680 }
    ]
  },
  {
    id: 1004,
    customer: '高橋美咲',
    total: 2680,
    status: '処理中',
    date: '2025-07-03',
    items: [
      { productId: 3, productName: 'にゃんこフレンド', color: 'オレンジ', quantity: 1, price: 2680 }
    ]
  },
  {
    id: 1005,
    customer: '山田健太',
    total: 5560,
    status: '配送中',
    date: '2025-07-02',
    items: [
      { productId: 5, productName: 'わんわんバディ', color: '茶色', quantity: 2, price: 2780 }
    ]
  }
]

// Sample user data
export const users: User[] = [
  {
    id: 1,
    name: '田中太郎',
    email: 'tanaka@example.com',
    isAdmin: false,
    createdAt: '2025-06-15'
  },
  {
    id: 2,
    name: '佐藤花子',
    email: 'sato@example.com',
    isAdmin: false,
    createdAt: '2025-06-20'
  },
  {
    id: 3,
    name: '管理者',
    email: 'admin@plushie-store.com',
    isAdmin: true,
    createdAt: '2025-06-01'
  }
]

// Helper functions
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getOrderById = (id: number): Order | undefined => {
  return orders.find(order => order.id === id)
}

export const getUserByEmail = (email: string): User | undefined => {
  return users.find(user => user.email === email)
}

export const getProductsByCategory = (category?: string): Product[] => {
  // For now, return all products since we don't have categories
  return products
}

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery)
  )
}

export const getOrdersByCustomer = (customerName: string): Order[] => {
  return orders.filter(order => order.customer === customerName)
}

export const getTotalRevenue = (): number => {
  return orders.reduce((total, order) => total + order.total, 0)
}

export const getTotalProductsSold = (): number => {
  return orders.reduce((total, order) => 
    total + order.items.reduce((itemTotal, item) => itemTotal + item.quantity, 0), 0
  )
}

export const getTopSellingProducts = (limit: number = 5): Array<{product: Product, soldCount: number}> => {
  const productSales = new Map<number, number>()
  
  orders.forEach(order => {
    order.items.forEach(item => {
      const currentCount = productSales.get(item.productId) || 0
      productSales.set(item.productId, currentCount + item.quantity)
    })
  })
  
  return Array.from(productSales.entries())
    .map(([productId, soldCount]) => ({
      product: getProductById(productId)!,
      soldCount
    }))
    .filter(item => item.product)
    .sort((a, b) => b.soldCount - a.soldCount)
    .slice(0, limit)
}