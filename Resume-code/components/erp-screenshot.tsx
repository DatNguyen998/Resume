export function ERPScreenshot() {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 rounded"></div>
          <span className="font-medium">Retex</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          <span>My Guest</span>
        </div>
      </div>

      <div className="border rounded-lg p-4 mb-4">
        <h3 className="font-medium mb-2">Thống kê chi tiết PO</h3>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-500">800</div>
            <div className="text-xs text-gray-500">Tổng số</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">600</div>
            <div className="text-xs text-gray-500">Hoàn thành</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">200</div>
            <div className="text-xs text-gray-500">Chưa hoàn thành</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50.0%</div>
            <div className="text-xs text-gray-500">Tỷ lệ</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border rounded-lg p-4">
          <h4 className="text-sm font-medium mb-2">Bar Chart</h4>
          <div className="h-40 bg-gray-100 rounded flex items-end p-2">
            <div className="w-1/4 h-[80%] bg-blue-500 mx-1"></div>
            <div className="w-1/4 h-[60%] bg-green-500 mx-1"></div>
            <div className="w-1/4 h-[20%] bg-red-500 mx-1"></div>
            <div className="w-1/4 h-[40%] bg-yellow-500 mx-1"></div>
          </div>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="text-sm font-medium mb-2">Pie Chart</h4>
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full border-8 border-blue-500 relative">
              <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500 rounded-tr-full"></div>
              <div className="absolute top-0 right-[33%] w-1/6 h-1/6 bg-orange-400 rounded-tr-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <h4 className="text-sm font-medium mb-2">Thống kê số lượng PO</h4>
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2 text-left">STT</th>
              <th className="p-2 text-left">Tên loại</th>
              <th className="p-2 text-left">Số lượng</th>
              <th className="p-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className="border-t">
                <td className="p-2">{item}</td>
                <td className="p-2">Loại {item}</td>
                <td className="p-2">{100 - item * 15}</td>
                <td className="p-2 text-center">
                  <div className="w-6 h-6 rounded-full bg-gray-200 mx-auto"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
