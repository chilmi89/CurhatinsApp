import React from "react"

import KeluhCard from "../../../components/KeluhCard"
import TypedText from "../../../components/HeaderDetail"

const Detail = () => {
  return (
    <div className=" bg-gray-900 flex flex-col items-center justify-center space-y-8 px-4 mt-28">
      {/* Header animasi */}
      <TypedText />

      {/* Card keluhan */}
      <div className="">
        <KeluhCard />
      </div>
    </div>
  )
}

export default Detail
