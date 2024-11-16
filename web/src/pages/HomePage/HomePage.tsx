import { useState } from 'react'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { navigate, routes } from '@redwoodjs/router'

import Button from 'src/components/Button/Button'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const features = [
  {
    id: 1,
    icon: '',
    title: 'Digital Inspections',
    description: 'Quickly enter inspection reports from your phone',
  },
]
const futureFeatures = [{ id: 1, icon: '', title: '', description: '' }]

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="relative min-h-screen bg-gray-900">
        <img
          src="web\src\pages\HomePage\Daytime Background.png"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4 p-8 text-center">
          <h1 className="text-4xl font-semibold text-gray-200">
            Effortless Compliance, Today and Tomorrow
          </h1>
          <p className="text-lg text-gray-400">
            Track stormwater inspections with ease and prepare for a new level
            of communication
          </p>
          <button className="rounded-xl bg-indigo-600 px-6 py-3 text-lg font-medium text-white shadow-lg hover:bg-indigo-500 focus:outline-none">
            Get Started Today
          </button>
        </div>
      </div>

      <div className="py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-200">
          Ready for Your Next Inspection
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-xl bg-gray-800 p-6 shadow-lg"
            >
              <feature.icon className="mx-auto h-12 w-12 text-indigo-500" />
              <h3 className="mt-4 text-xl font-semibold text-gray-200">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-200">
          The Future of Compliance is Connected
        </h2>
        <div className="mt-8 flex space-x-4 overflow-x-auto">
          {futureFeatures.map((feature) => (
            <div
              key={feature.id}
              className="min-w-[200px] rounded-xl bg-gray-800 p-6 shadow-lg"
            >
              <feature.icon className="mx-auto h-10 w-10 text-indigo-500" />
              <h3 className="mt-4 text-lg font-semibold text-gray-200">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 px-4 text-center bg-gray-800 rounded-xl">
        <h2 className="text-2xl font-semibold text-gray-200">
          What Inspectors Are Saying
        </h2>
        <p className="mt-4 italic text-gray-400">
          "This app makes stormwater inspections easier than ever!" -
          Placeholder Quote
        </p>
      </div>

      <div className="py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-200">
          Ready to Start Your Compliance Journey?
        </h2>
        <div className="mt-6 flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <button className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white shadow-lg hover:bg-indigo-500">
            Get Started Today
          </button>
          <button className="rounded-xl bg-gray-700 px-6 py-3 font-medium text-white shadow-lg hover:bg-gray-600">
            Learn More About Future Features
          </button>
        </div>
      </div>
    </>
  )
}

export default HomePage
