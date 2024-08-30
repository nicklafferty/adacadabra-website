import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from "lucide-react"
import Image from 'next/image';

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
            {/* Left Column - Social Proof */}
            <div className="md:w-1/2 bg-purple-600 p-12 text-white flex flex-col justify-center">
              <div className="mb-8">
                <div className="text-6xl mb-4" role="img" aria-label="Crystal Ball">🔮</div>
                <blockquote className="text-2xl font-semibold mb-4">
                  &ldquo;AdAcadabra has revolutionized our ad management. It&apos;s like having a marketing genius working 24/7!&rdquo;
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sarah Johnson"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-purple-200">Marketing Director, TechCorp</p>
                  </div>
                </div>
              </div>
              <p className="text-purple-200">
                Join thousands of businesses using AdAcadabra to optimize their ad spend and boost ROI.
              </p>
            </div>

            {/* Right Column - Signup Form */}
            <div className="md:w-1/2 p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Start tracking your monthly budget in seconds</h2>
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
                  Sign up with Google
                </Button>

                <div className="relative">
                  <Separator className="my-4" />
                  <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
                    OR
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" type="email" placeholder="name@company.com" required />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  By signing up, you agree to our{" "}
                  <Link href="#" className="text-purple-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-purple-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="#" className="text-purple-600 hover:underline font-semibold">
                    Log in
                  </Link>
                </p>
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