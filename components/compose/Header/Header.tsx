import React from 'react'

const Header: React.FunctionComponent<{ currentPage: string }> = ({
  currentPage,
}) => {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{currentPage}</h1>
        </div>
      </header>
    </div>
  )
}

export default Header
