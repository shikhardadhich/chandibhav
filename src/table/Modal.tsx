interface ModalProps {
  title: string
  visible: boolean
  onClose: () => void
}

export default function Modal({ title, visible, onClose, children }: React.PropsWithChildren<ModalProps>) {
  if (!visible) {
    return null
  }

  return (
    <>
      <div className="overlay"></div>

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen  bg-black bg-opacity-75">
          <div className="fixed"></div>

          <div className="bg-white rounded-lg overflow-hidden">
            <div className="px-4 py-2 bg-gray-200">{title}</div>

            <div className="p-4">{children}</div>

            <div className="flex justify-end p-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}