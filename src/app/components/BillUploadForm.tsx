'use client'

import { useState } from 'react'
import { Upload, X } from 'lucide-react'

export default function BillUploadForm() {
  const [file, setFile] = useState<File | null>(null)
  const [procedure, setProcedure] = useState('')
  const [totalCostWithoutInsurance, setTotalCostWithoutInsurance] = useState('')
  const [costWithInsurance, setCostWithInsurance] = useState('')
  const [copayment, setCopayment] = useState('')
  const [hospital, setHospital] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [date, setDate] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Submitting:', { 
      file, 
      procedure, 
      totalCostWithoutInsurance, 
      costWithInsurance, 
      copayment, 
      date, 
      hospital, 
      postalCode 
    })
    // Reset form after submission
    setFile(null)
    setProcedure('')
    setTotalCostWithoutInsurance('')
    setCostWithInsurance('')
    setCopayment('')
    setHospital('')
    setPostalCode('')
    setDate('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="procedure" className="block text-sm font-medium text-gray-700">
          Medical Procedure
        </label>
        <input
          type="text"
          id="procedure"
          value={procedure}
          onChange={(e) => setProcedure(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="totalCostWithoutInsurance" className="block text-sm font-medium text-gray-700">
          Total Cost Without Insurance ($)
        </label>
        <input
          type="number"
          id="totalCostWithoutInsurance"
          value={totalCostWithoutInsurance}
          onChange={(e) => setTotalCostWithoutInsurance(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="costWithInsurance" className="block text-sm font-medium text-gray-700">
          Cost With Insurance ($)
        </label>
        <input
          type="number"
          id="costWithInsurance"
          value={costWithInsurance}
          onChange={(e) => setCostWithInsurance(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="copayment" className="block text-sm font-medium text-gray-700">
          Copayment ($)
        </label>
        <input
          type="number"
          id="copayment"
          value={copayment}
          onChange={(e) => setCopayment(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="hospital" className="block text-sm font-medium text-gray-700">
          Hospital/Clinic Name
        </label>
        <input
          type="text"
          id="hospital"
          value={hospital}
          onChange={(e) => setHospital(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
          Postal Code
        </label>
        <input
          type="text"
          id="postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Date of Service
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Bill (Optional)
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
              >
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.png,.jpg,.jpeg" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">
              PNG, JPG, PDF up to 10MB
            </p>
          </div>
        </div>
        {file && (
          <div className="mt-2 flex items-center">
            <span className="text-sm text-gray-500">{file.name}</span>
            <button
              type="button"
              onClick={() => setFile(null)}
              className="ml-2 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit Bill Information
        </button>
      </div>
    </form>
  )
}

