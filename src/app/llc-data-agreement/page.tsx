import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const LLCDataAgreement = () => {
  return (
    <div className={`${poppins.className} min-h-screen bg-gray-50`}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">LLC Data Agreement</h1>
          <p className="text-gray-600 mb-8">Last updated: April 23, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This Data Agreement ("Agreement") is entered into between ReplyQuick LLC ("Company") and the user ("User") of our services. This Agreement governs the processing of data in connection with the use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Definitions</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Data Controller</strong>: The entity that determines the purposes and means of processing personal data.</li>
              <li><strong>Data Processor</strong>: The entity that processes personal data on behalf of the Data Controller.</li>
              <li><strong>Personal Data</strong>: Any information relating to an identified or identifiable natural person.</li>
              <li><strong>Processing</strong>: Any operation performed on personal data, such as collection, storage, use, or disclosure.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Processing</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Scope of Processing</h3>
              <p className="text-gray-600 mb-4">The Company will process personal data only for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Providing and maintaining our services</li>
                <li>Improving user experience</li>
                <li>Communicating with users</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Data Security</h3>
              <p className="text-gray-600 mb-4">The Company implements appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Encryption of personal data</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Data backup and recovery procedures</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Subject Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Users have the following rights regarding their personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Right to access their personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Transfers</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Company may transfer personal data to third parties only when necessary and in compliance with applicable data protection laws. Such transfers may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Service providers and business partners</li>
              <li>Legal and regulatory authorities</li>
              <li>Professional advisors</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Company will retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance and Cooperation</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Company will:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Comply with all applicable data protection laws</li>
              <li>Cooperate with supervisory authorities</li>
              <li>Implement appropriate technical and organizational measures</li>
              <li>Maintain records of processing activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">If you have any questions about this Data Agreement, please contact us:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>By email: <a href="mailto:Info@replyquick.ai" className="text-blue-600 hover:underline">Info@replyquick.ai</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LLCDataAgreement; 