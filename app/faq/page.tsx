import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="section bg-gradient-subtle">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about Image Compressor
            </p>
          </div>
          
          {/* FAQ List */}
          <div className="space-y-4">
            
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            What is Image Compressor?
          </h3>
          <p className="text-gray-600">
            Free online image compression tool. Reduce file size while maintaining quality. Supports JPEG, PNG, WebP.
          </p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Is it free to use?
          </h3>
          <p className="text-gray-600">
            Yes, Image Compressor is completely free to use.
          </p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Do I need to create an account?
          </h3>
          <p className="text-gray-600">
            No, you can use all features without signing up.
          </p>
        </div>

          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions?
            </p>
            <Link href="/" className="btn-primary inline-flex items-center gap-2">
              Try Image Compressor Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
