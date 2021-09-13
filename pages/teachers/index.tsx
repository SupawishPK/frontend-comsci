import React from 'react'
import TeachersCard from '../../components/compose/TeachersCard'
import MainLayout from '../../components/layouts/MainLayout'
import { teachersData } from '../../mocks/teachers'

const Teacher = () => {
  const mainLayout = {
    currentPage: 'คณาจารย์',
  }
  return (
    <MainLayout {...mainLayout}>
      <main>
        <TeachersCard teachers={teachersData} />
      </main>
    </MainLayout>
  )
}

export default Teacher
