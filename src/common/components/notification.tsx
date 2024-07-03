/* eslint-disable @typescript-eslint/no-explicit-any */
import { TypeOptions, toast } from "react-toastify"

const Notify = (type: TypeOptions, message: any) => {
  toast(message, {
    type,
    position: "bottom-center",
    theme: "colored",
    hideProgressBar: true
  })
}

export default Notify
