
const DeleteAccount = () => {
  return (
    <div>
      <h1>
        Are you sure you want to delete Account?
        <span>This Action is Irreversable!!</span>
      </h1>
      <div>
        <button 
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
