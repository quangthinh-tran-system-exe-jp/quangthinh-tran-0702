'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, User, Lock } from 'lucide-react'

export default function LoginPage() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      if (isAdmin) {
        // Redirect to admin dashboard
        window.location.href = '/admin'
      } else {
        // Redirect to user dashboard or home
        window.location.href = '/'
      }
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="text-3xl font-bold text-pink-600">
            🧸 Plushie Store
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {isAdmin ? '管理者ログイン' : 'ログイン'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isAdmin ? '管理者アカウントでログインしてください' : 'アカウントにログインしてください'}
          </p>
        </div>

        {/* Login Type Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setIsAdmin(false)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              !isAdmin 
                ? 'bg-white text-pink-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            一般ユーザー
          </button>
          <button
            onClick={() => setIsAdmin(true)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              isAdmin 
                ? 'bg-white text-pink-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            管理者
          </button>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                メールアドレス
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder={isAdmin ? "admin@plushie-store.com" : "your@email.com"}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                パスワード
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="パスワードを入力"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Demo Credentials */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-blue-800 mb-2">デモ用アカウント</h4>
            <div className="text-xs text-blue-700 space-y-1">
              <p><strong>一般ユーザー:</strong> user@demo.com / password123</p>
              <p><strong>管理者:</strong> admin@demo.com / admin123</p>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                ログイン状態を保持
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-pink-600 hover:text-pink-500">
                パスワードを忘れた方
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-pink-600 hover:bg-pink-700'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                ログイン中...
              </div>
            ) : (
              'ログイン'
            )}
          </button>

          {/* Sign Up Link */}
          {!isAdmin && (
            <div className="text-center">
              <p className="text-sm text-gray-600">
                アカウントをお持ちでない方は{' '}
                <Link href="/register" className="text-pink-600 hover:text-pink-500 font-medium">
                  新規登録
                </Link>
              </p>
            </div>
          )}
        </form>

        {/* Back to Home */}
        <div className="text-center">
          <Link href="/" className="text-sm text-gray-600 hover:text-pink-600">
            ← ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}