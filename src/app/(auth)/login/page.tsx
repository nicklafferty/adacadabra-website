import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-purple-100 font-sans flex flex-col">
      {/* Navbar */}
      <nav className="py-4">
        <div className="container mx-auto px-4">
          <div className="bg-purple-200 rounded-full py-3 px-6 max-w-6xl mx-auto flex items-center justify-between">
            <div className="text-2xl font-bold text-purple-800">AdAcadabra</div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Column - Image and Text */}
            <div className="md:w-1/2 bg-purple-600 p-12 text-white flex flex-col justify-center items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%20Aug%2029%20Logo%20for%20Adacadabra-x8Se0jHybITP9Ai3IaRATcMpYY6TNF.webp"
                alt="Cartoon wizard character"
                className="w-64 h-64 object-contain mb-8"
              />
              <h2 className="text-3xl font-bold text-center">Welcome back. Let&apos;s make some magic.</h2>
            </div>

            {/* Right Column - Login Form */}
            <div className="md:w-1/2 p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Log in to your account</h2>
              <div className="space-y-6">
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Log in with Google
                </Button>

                <div className="relative">
                  <Separator className="my-4" />
                  <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
                    OR
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <Link href="#" className="font-medium text-purple-600 hover:text-purple-500">
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Log in
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">Don&apos;t have an account? <a href="#" className="text-purple-600 hover:underline">Sign up</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600 text-sm">
            &copy; 2024 AdAcadabra. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}