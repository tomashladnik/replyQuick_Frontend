import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const LLCSubProcessor = () => {
  return (
    <div className={`${poppins.className} min-h-screen bg-gray-50`}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">LLC Sub-Processor Agreement</h1>
          <p className="text-gray-600 mb-8">Last updated: April 23, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This Sub-Processor Agreement ("Agreement") governs the relationship between ReplyQuick LLC ("Company") and its sub-processors in relation to the processing of personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Definitions</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Sub-Processor</strong>: A third-party data processor engaged by the Company to process personal data on behalf of the Company.</li>
              <li><strong>Personal Data</strong>: Any information relating to an identified or identifiable natural person.</li>
              <li><strong>Processing</strong>: Any operation performed on personal data, such as collection, storage, use, or disclosure.</li>
              <li><strong>Data Protection Laws</strong>: All applicable laws and regulations relating to the processing of personal data.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sub-Processor Obligations</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">General Requirements</h3>
              <p className="text-gray-600 mb-4">Sub-processors must:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Process personal data only on documented instructions from the Company</li>
                <li>Ensure that persons authorized to process personal data have committed themselves to confidentiality</li>
                <li>Implement appropriate technical and organizational measures to ensure security of processing</li>
                <li>Assist the Company in ensuring compliance with data subject rights</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Security Measures</h3>
              <p className="text-gray-600 mb-4">Sub-processors must implement appropriate security measures, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Encryption of personal data</li>
                <li>Regular security testing and assessment</li>
                <li>Access controls and authentication</li>
                <li>Incident response procedures</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Transfers</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sub-processors may transfer personal data outside the jurisdiction where it was collected only if:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>The transfer is necessary for the performance of the service</li>
              <li>Appropriate safeguards are in place</li>
              <li>The transfer complies with applicable data protection laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Audit Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Company has the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Conduct audits of sub-processors' facilities and operations</li>
              <li>Request documentation demonstrating compliance</li>
              <li>Inspect security measures and processing activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Breach Notification</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sub-processors must notify the Company without undue delay after becoming aware of a personal data breach, providing:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Description of the nature of the breach</li>
              <li>Categories and approximate number of data subjects affected</li>
              <li>Measures taken or proposed to address the breach</li>
              <li>Contact details for further information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Upon termination of the agreement, sub-processors must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Return or delete all personal data</li>
              <li>Provide certification of deletion</li>
              <li>Maintain confidentiality obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">If you have any questions about this Sub-Processor Agreement, please contact us:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>By email: <a href="mailto:Info@replyquick.ai" className="text-blue-600 hover:underline">Info@replyquick.ai</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LLCSubProcessor; 