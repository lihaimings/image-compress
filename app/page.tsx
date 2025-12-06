import Link from "next/link";
import { ArrowRight, Check, Download, Image, Minimize2 } from "lucide-react";
import ToolComponent from "@/components/tool/ToolComponent";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-subtle section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Compress Images Without Losing Quality
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up">
              Free online image compression tool. Reduce file size while maintaining quality. Supports JPEG, PNG, WebP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <a href="#tool" className="btn-primary inline-flex items-center gap-2">
                Try It Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="/how-to-use" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tool Section */}
      <section id="tool" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ToolComponent />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Image Compressor?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make your work easier
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
          <div className="card hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <Image className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Batch Upload
            </h3>
            <p className="text-gray-600">
              Compress multiple images at once
            </p>
          </div>

          <div className="card hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <Minimize2 className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Quality Control
            </h3>
            <p className="text-gray-600">
              Adjust compression level
            </p>
          </div>

          <div className="card hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Format Conversion
            </h3>
            <p className="text-gray-600">
              Convert between formats
            </p>
          </div>

          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start using Image Compressor now - it's free and requires no signup.
          </p>
          <a href="#tool" className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold py-3 px-8 rounded-xl hover:bg-primary-50 transition-colors">
            Try Image Compressor Free
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
