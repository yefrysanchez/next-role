import BoardColumn from '@/components/board/BoardColumn'
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-[95vh] border-t bg-gray-100'>
         <h1 className="font-bold tracking-tighter text-4xl text-center py-4">Board Title</h1>
        <section className='lg:grid lg:grid-cols-4 gap-2 px-4 flex overflow-x-scroll lg:overflow-auto'>
            <BoardColumn title='wishlist' />
            <BoardColumn title='applied'/>
            <BoardColumn title='interview'/>
            <BoardColumn title='offer'/>
        </section>
    </div>
  )
}

export default Page
