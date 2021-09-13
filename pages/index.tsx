import type { NextPage } from 'next'
import React from 'react'
import News from '../components/compose/News'
import Pagination from '../components/core/Pagination'
import { productsData } from '../mocks/news'
import Banner from '../components/compose/Banner'
import MainLayout from '../components/layouts/MainLayout'

const Home: NextPage = () => {
  const mainLayout = {
    currentPage: 'หน้าหลัก',
  }

  return (
    <MainLayout {...mainLayout}>
      <main>
        <Banner />
        <News products={productsData} />
        <Pagination />
      </main>
    </MainLayout>
  )
}

export default Home
