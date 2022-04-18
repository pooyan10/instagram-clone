import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white border-2 rounded-sm my-7">
      {/* Header */}
      <div className="flex items-center p-5 ">
        <img
          className="h-14 w-14 rounded-full object-contain p-1 border mr-4 "
          src={userImg}
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* img */}
      <img className="object-cover w-full" src={img} alt="" />
      {/* buttons */}

      {/* caption */}

      {/* comments */}

      {/* input box */}
    </div>
  );
}

export default Post;
