import { IoCallOutline } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function ChatHeader({ close, currentChat }) {
  return (
    <>
      <div className="head-container  border-b border-gray-200 p-3 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <IoIosArrowDropleftCircle
            onClick={close}
            className="self-center text-customPurp w-6 h-6 hover:cursor-pointer lg:hidden"
          />
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              className="w-full h-full"
              src={
                currentChat.image ||
                "https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
              }
              alt=""
            />
          </div>

          <span className="font-bold">{currentChat?.name || "User Name"}</span>
        </div>
        <div className="flex gap-3">
          <span>
            <IoCallOutline className="w-6 h-6 text-customPurp transition ease-in-out delay-150 hover:-translate-y-1 hover:cursor-pointer hover:scale-110 hover: duration-300 " />
          </span>
          <span>
            <MdOutlineVideoCall className="w-6 h-6 text-customPurp transition ease-in-out delay-150 hover:-translate-y-1 hover:cursor-pointer hover:scale-110 hover: duration-300" />
          </span>
          {/* <span>
                <HiDotsVertical className="w-6 h-6 text-customPurp transition ease-in-out delay-150 hover:-translate-y-1 hover:cursor-pointer hover:scale-110 hover: duration-300" />
              </span> */}
        </div>
      </div>
    </>
  );
}
