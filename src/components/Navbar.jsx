import { Clock, Phone, MapPin } from "lucide-react"
import logo from '../assets/logo3.png'

export default function Navbar() {
  return (
    <>
      <div className="w-full border-b">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-6">
          <a href="/" className="flex items-center">
            <img src={logo} alt="City Dental Care" className="h-auto w-[130px]" />
          </a>

          <div className="flex flex-col md:flex-row gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              <div className="bg-[#1d5c5c] p-2 rounded">
                <Clock className="text-white h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Opening Time</p>
                <p className="text-sm">Monday - Friday 8AM - 7PM</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-[#1d5c5c] p-2 rounded">
                <Phone className="text-white h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone no</p>
                <p className="text-sm">+0800 2336 7811</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-[#1d5c5c] p-2 rounded">
                <MapPin className="text-white h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">27th Avenue</p>
                <p className="text-sm">New York, W2 3XE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-b">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-6">
          <nav className="flex items-center space-x-8">
            <a href="/" className="text-sm font-medium border-b-2 border-[#1d5c5c]">
              Home
            </a>
            <a href="/about" className="text-sm font-medium hover:text-[#1d5c5c]">
              About us
            </a>
            <a href="/staff" className="text-sm font-medium hover:text-[#1d5c5c]">
              Our Staff
            </a>
            <a href="/blogs" className="text-sm font-medium hover:text-[#1d5c5c]">
              Blogs
            </a>
            <a href="/feedback" className="text-sm font-medium hover:text-[#1d5c5c]">
              Feedback
            </a>
            <a href="/faqs" className="text-sm font-medium hover:text-[#1d5c5c]">
              FAQ's
            </a>
            <a href="/services" className="text-sm font-medium hover:text-[#1d5c5c]">
              Services
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-[#1d5c5c]">
              Contact us
            </a>
          </nav>

          <a
            href="/appointment"
            className="mt-4 md:mt-0 bg-[#1d5c5c] text-white px-6 py-3 text-sm font-medium uppercase"
          >
            GET APPOINTMENT
          </a>
        </div>
      </div>
    </>
  )
}

