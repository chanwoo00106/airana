import Image from 'next/image'
import SearchIcon from '@svg/SearchIcon'
import GlobalAltIcon from '@svg/GlobalAltIcon'
import UserCircleIcon from '@svg/UserCircleIcon'
import MenuIcon from '@svg/MenuIcon'
import { DateRangePicker, RangeKeyDict } from 'react-date-range'
import { useState } from 'react'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import Users from '@svg/Users'

const Header = () => {
  const [search, setSearch] = useState<string>('')
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [noOfGuests, setNoOfGuests] = useState<number>(0)

  const onChange = (range: RangeKeyDict) => {
    if (range.selection.startDate) setStartDate(range.selection.startDate)
    if (range.selection.endDate) setEndDate(range.selection.endDate)
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  return (
    <header className="sticky top-0 left-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholderplaceholder-gray-400"
        />
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex mx-2" />
      </div>

      <div className="flex space-x-4 justify-end text-gray items-center">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobalAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {search && (
        <div className="flex flex-col col-span-3 mx-auto mt-8">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={onChange}
            rangeColors={['#Fd5b61']}
            minDate={new Date()}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl pl-2 flex-grow font-semibold">
              Number of Guests
            </h2>
            <Users className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={noOfGuests}
              onChange={e => setNoOfGuests(+e.target.value)}
            />
          </div>

          <div className="flex">
            <button
              onClick={() => setSearch('')}
              className="flex-grow text-gray-500"
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
