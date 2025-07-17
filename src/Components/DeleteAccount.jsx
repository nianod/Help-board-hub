import { useState } from "react"

const DeleteAccount = ({ onCancel, onConfirm}) => {
    const [loading, setLoading] = useState(false)
  return (
    <div>
      <h1>
        Are you sure you want to delete Account?
        <span>This Action is Irreversable!!</span>
      </h1>
      <div className="flex justify-end gap-3">
        <button 
          className="p-2 bg-blue-500 rounded cursor-pointer"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button 
         className={`p-2 bg-green-700 rounded hover:bg-green-600 ${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
          onClick={onConfirm}
        >
          {loading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  )
}

export default DeleteAccount
