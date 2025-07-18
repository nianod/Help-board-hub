import { useState } from "react"

const DeleteAccount = ({ onCancel, onConfirm }) => {
    const [loading, setLoading] = useState(false)
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-70 shadow-md">
            <div className="bg-gray-900 p-6 rounded-lg max-w-md w-full mx-4">
                <h1 className="text-xl font-bold text-white mb-2">
                    Are you sure you want to delete Account?
                </h1>
                <span className="text-red-400 block mb-4">This Action is Irreversible!!</span>
                
                <div className="flex justify-end gap-3">
                    <button 
                        className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded transition"
                        onClick={onCancel}
                        disabled={loading}
                    >
                        Cancel
                    </button>
                    <button 
                        className={`px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded transition ${
                            loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                        }`}
                        onClick={() => {
                            setLoading(true)
                            onConfirm()}}
                        disabled={loading}
                    >
                        {loading ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteAccount