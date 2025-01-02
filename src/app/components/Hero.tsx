'use client'

import { useState } from 'react'
import { Upload } from 'lucide-react'

export default function Hero() {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle file upload logic here
    console.log('Uploading file:', file)
  }

  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bring Transparency to Healthcare Costs</h1>
        <p className="text-xl mb-8">Upload your medical bills and help others understand true healthcare costs.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-white border-dashed rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-700">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 mb-3" />
                <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs">PDF or image files (MAX. 10MB)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.png,.jpg,.jpeg" />
            </label>
          </div>
          {file && (
            <div className="mt-4">
              <p className="text-sm">{file.name}</p>
              <button type="submit" className="mt-2 px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100">
                Upload Bill
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

