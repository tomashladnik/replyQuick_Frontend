import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const CookiePolicy = () => {
  return (
    <div className={`${poppins.className} min-h-screen bg-gray-50`}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: April 23, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This Cookie Policy explains how ReplyQuick uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What are cookies?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cookies set by the website owner (in this case, ReplyQuick) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why do we use cookies?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Essential Cookies</h3>
              <p className="text-gray-600 mb-4">These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Performance Cookies</h3>
              <p className="text-gray-600 mb-4">These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Analytics Cookies</h3>
              <p className="text-gray-600 mb-4">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Marketing Cookies</h3>
              <p className="text-gray-600">These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Control Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in our cookie banner.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Cookie Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">If you have any questions about our use of cookies, please contact us:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>By email: <a href="mailto:Info@replyquick.ai" className="text-blue-600 hover:underline">Info@replyquick.ai</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 