import Image from "next/image"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ERPScreenshot } from "@/components/erp-screenshot"

export default function ProjectDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Sidebar - Profile */}
          <div className="w-full md:w-80 p-8 border-r border-gray-100">
            <div className="flex flex-col items-center">
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Profile"
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold mt-2">Ho Thang</h2>
              <p className="text-gray-500 text-sm">Business Analyst</p>

              <div className="w-full mt-8 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Residence:</span>
                  <span className="text-gray-800">Viet Nam</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">City:</span>
                  <span className="text-gray-800">HCM City</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Experience:</span>
                  <span className="text-gray-800">3 years</span>
                </div>
              </div>

              <Button className="w-full mt-12 bg-[#c4a48e] hover:bg-[#b39580] text-white flex items-center justify-center gap-2 rounded-md">
                <Download size={16} />
                DOWNLOAD CV
              </Button>
            </div>
          </div>

          {/* Main Content - Project Details */}
          <div className="flex-1 p-8">
            <div className="mb-6">
              <Badge
                variant="outline"
                className="px-4 py-1 rounded-full text-gray-600 border-gray-200 bg-gray-50 font-normal"
              >
                <span className="mr-2">📄</span> Project Details
              </Badge>
            </div>

            <h1 className="text-3xl font-bold mb-8">Retex ERP System</h1>

            <Card className="overflow-hidden border-0 shadow-md rounded-xl">
              <div className="p-4">
                <ERPScreenshot />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
