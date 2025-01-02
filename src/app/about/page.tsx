import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8">
      <h1 className="text-4xl font-bold text-blue-800">About HealthCostClarity</h1>
      
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          HealthCostClarity is dedicated to bringing transparency to healthcare costs. Our platform is designed to help people understand the expected costs of hospital procedures and medical treatments across different locations.
        </p>
        <p className="text-gray-700 mb-4">
          We believe that access to clear, accurate information about healthcare costs is crucial for making informed decisions about your health and finances. By providing this information, we aim to empower patients and contribute to a more transparent healthcare system.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Crowdsourced Data</h2>
        <p className="text-gray-700 mb-4">
          What makes HealthCostClarity unique is that all of our data is crowdsourced from users like you. When you share your medical bills and experiences, you're helping others in their healthcare journey. This collaborative approach allows us to gather real-world cost information across a wide range of procedures and locations.
        </p>
        <p className="text-gray-700 mb-4">
          By contributing your data, you're not just helping yourself – you're helping create a more transparent and fair healthcare system for everyone. Every submission adds to our growing database, making our cost estimates more accurate and comprehensive.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Commitment</h2>
        <p className="text-gray-700 mb-4">
          We are committed to maintaining the privacy and security of your personal information. All data submitted to HealthCostClarity is anonymized and aggregated to protect individual privacy while still providing valuable insights.
        </p>
        <p className="text-gray-700 mb-4">
          HealthCostClarity is and always will be free from advertising. We believe that access to this crucial information should not be influenced by commercial interests. Our goal is to provide unbiased, user-driven data to help you make the best decisions for your health and finances.
        </p>
      </section>

      <section className="bg-blue-100 shadow-md rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Support Our Mission</h2>
        <p className="text-blue-700 mb-6">
          If you find HealthCostClarity valuable, please consider supporting our mission. Your donation helps us maintain and improve our platform, ensuring we can continue to provide this free service to everyone.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Donate
        </Button>
      </section>
    </div>
  )
}

