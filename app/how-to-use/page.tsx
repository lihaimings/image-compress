import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowToUsePage() {
  return (
    <div className="section bg-gradient-subtle">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How to Use Image Compressor
            </h1>
            <p className="text-xl text-gray-600">
              Get started in just a few simple steps
            </p>
          </div>
          
          {/* Steps */}
          <div className="space-y-6">
            
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex-shrink-0 flex sm:block items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
            <span className="sm:hidden text-lg font-semibold text-gray-900">Upload images</span>
          </div>
          <div className="card flex-1">
            <h3 className="hidden sm:block text-xl font-semibold text-gray-900 mb-2">
              Upload images
            </h3>
            <p className="text-gray-600 mb-2">
              Files loaded
            </p>
            <p className="text-sm text-gray-500">
              UI Element: Dropzone
            </p>
          </div>
        </div>

          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center">
            <Link href="/" className="btn-primary inline-flex items-center gap-2">
              Try It Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
