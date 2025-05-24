import BoardColumn from '@/components/board/BoardColumn'
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-[90vh] border-t'>
         <h1 className="font-bold tracking-tighter text-4xl text-center py-4">Board Title</h1>
        <section className='grid lg:grid-cols-4 gap-2 max-w-'>
            <BoardColumn />
            <BoardColumn />
            <BoardColumn />
            <BoardColumn />
        </section>
    </div>
  )
}

export default Page
