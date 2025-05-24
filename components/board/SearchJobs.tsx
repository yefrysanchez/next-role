import React from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

const SearchJobs = () => {
  return (
    <form className="px-2 mt-4 relative">
        <Search size={15} className='absolute left-6 top-1/2 -translate-1/2 text-gray-400'/>
        <Input type="search" placeholder="Search" className="bg-gray-50 border-0 pl-8" />
      </form>
  )
}

export default SearchJobs
