import React from 'react'
import DialogModel from '../../core/DialogModel'

interface TeacherProps {
  teachers: Array<any>
}

const TeacherCard: React.FunctionComponent<TeacherProps> = ({ teachers }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  // const [selectedData, setSelectedData] = React.useState<any>()

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
    // setSelectedData(data)
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 pb-16 mx-auto sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {teachers.map((data) => (
            <div key={data.id} className="relative group" onClick={openModal}>
              <div className="overflow-hidden bg-gray-200 rounded-md min-h-50 aspect-w-1 aspect-h-1 group-hover:opacity-75 ">
                <img
                  src={`https://res.cloudinary.com/project63/image/upload/c_scale,h_756,q_66${data.imageSrc}`}
                  alt={data.imageAlt}
                  className="object-cover object-center w-full h-full lg:w-full lg:h-full"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {data.name[0].name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{data.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <DialogModel
          isOpen={isOpen}
          onClose={closeModal}
          teachers={teachers[0]}
        />
      </div>
    </div>
  )
}

export default TeacherCard
