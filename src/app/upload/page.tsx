import BillUploadForm from '../components/BillUploadForm'

export default function UploadPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Upload Your Medical Bill</h1>
      <p className="mb-8 text-gray-600">
        Help improve healthcare cost transparency by sharing your anonymized medical bill information.
        Your contribution will help others understand the true costs of healthcare procedures.
      </p>
      <BillUploadForm />
    </div>
  )
}

