import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const PrivacyPolicy = () => {
  return (
    <div className={`${poppins.className} min-h-screen bg-gray-50`}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: April 23, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At ReplyQuick, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
              <p className="text-gray-600 mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Register for an account</li>
                <li>Express interest in obtaining information about us or our services</li>
                <li>Participate in activities on our services</li>
                <li>Contact us in any way</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Usage Data</h3>
              <p className="text-gray-600 mb-4">We may also collect information about how you access and use our services, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Device information</li>
                <li>Log and usage data</li>
                <li>Location information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>With service providers and business partners</li>
              <li>For legal compliance and protection</li>
              <li>In connection with a business transfer</li>
              <li>With your consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to request deletion of your information</li>
              <li>Right to restrict or object to processing</li>
              <li>Right to data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>By email: <a href="mailto:Info@replyquick.ai" className="text-blue-600 hover:underline">Info@replyquick.ai</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 