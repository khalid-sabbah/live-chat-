import { useState } from "react";
import Header from "./Header";
import ChatCard from "./ChatCard";
import ChatWindow from "./ChatWindow";
import { IoSearchOutline } from "react-icons/io5";

export default function ChatApp() {
  const chatData = [
    {
      id: 1,
      image:
        "https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp",
      name: "Khalid",
      subtitle: "Hey my name is Khalid",
      date: "Today",
    },
    {
      id: 2,
      image:
        "https://t4.ftcdn.net/jpg/06/43/68/65/360_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47.jpg",
      name: "Reem",
      subtitle: "How's it going?",
      date: "Yesterday",
    },
    {
      id: 3,
      image:
        "https://images.vexels.com/media/users/3/145908/list/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg",
      name: "Mohammed",
      subtitle: "Let's meet up tomorrow.",
      date: "2 days ago",
    },
    {
      id: 4,
      image:
        "https://img.pikbest.com/png-images/qiantu/cute-girl-avatar-element-icons_2689712.png!sw800",
      name: "Sara",
      subtitle: "Did you check that out?",
      date: "3 days ago",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzSvnV-Y2Puio_m9tn3zYlcudeyNJzQp77w&s",
      name: "Omar",
      subtitle: "I'll call you later.",
      date: "4 days ago",
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3E9H_HA2N8S1F901TNp9Eh42DRdvtB8Jk_cjG-ENUvHZvVGAIwISDxZK2id-3ghVAGU&usqp=CAU",
      name: "Layla",
      subtitle: "Can you send me the files?",
      date: "5 days ago",
    },
    {
      id: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmKCiRhiGj9UCKZOK-GiuCZcp7D5jd1J8_pj2m9XL4udCzZ7z07QxKrf0MG3b7tUYFnw&usqp=CAU",
      name: "Yusuf",
      subtitle: "Happy birthday!",
      date: "6 days ago",
    },
    {
      id: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YaQz4bwwdOgSeLqdTId_6V7Y664CshcgjiOl1OLnra_KFtvmuWlwikCmmRuKNFF5t7g&usqp=CAU",
      name: "Zahra",
      subtitle: "Let's catch up soon.",
      date: "Last week",
    },
    {
      id: 9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvTcK2RtLSQ1k-Knmlj3KWRuzEpFi3WJJkwZ8mE_jjvc7JOaeY8XFYU5Xihkzk-EjnQw&usqp=CAUf",
      name: "Ali",
      subtitle: "Can you help me with this?",
      date: "Last Monday",
    },
    {
      id: 10,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZcoXWGeykwYReuJv7AL5pUORvXqgVOZtiA&s",
      name: "Fatima",
      subtitle: "What's the plan for tonight?",
      date: "Last Sunday",
    },
    {
      id: 11,
      image:
        "https://img.freepik.com/premium-photo/avatar-resourcing-company_1254967-6653.jpg?semt=ais_hybrid",
      name: "Hassan",
      subtitle: "Great job on the project!",
      date: "Last Saturday",
    },
    {
      id: 12,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlozKKSwDccNUrpLnEdfhNVmQoPEX-q8Gdw&s",
      name: "Mariam",
      subtitle: "Can you review this?",
      date: "Last Friday",
    },
    {
      id: 13,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3I96Iz88-TaV-RxMxPOs3x_JptEbUwJbOJFgjAhG3PNrnszpatM5Bt_ua9_kGYyXPIm4&usqp=CAU",
      name: "Salman",
      subtitle: "Let's go for coffee.",
      date: "2 weeks ago",
    },
    {
      id: 14,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWu6GlzT75sWgL1yMp2OKzsrsT_Qls42AaQ&s",
      name: "Nora",
      subtitle: "Thanks for the help!",
      date: "2 weeks ago",
    },
    {
      id: 15,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBd3HlN0cl6SZH82s_2kLOf2wd_VztdfKkHNROzwUYVwQpwRN5CI6YZTXP0BtrTyiyqo&usqp=CAU",
      name: "Ahmad",
      subtitle: "I'll send you the details.",
      date: "2 weeks ago",
    },
  ];
  const [isclicked, setIsClicked] = useState(false);
  const [filterdChats, setFilterdChats] = useState(chatData);
  const [inputValue, setInputValue] = useState("");
  const [currentChat, setCurrentChat] = useState(chatData[0]);

  const clicked = () => {
    setIsClicked(true);
  };

  const close = () => {
    setIsClicked(false);
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    setFilterdChats(
      chatData.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      {isclicked ? (
        <>
          <div className="lg:hidden">
            <ChatWindow close={close} currentChat={currentChat} />
          </div>

          <div className="hidden lg:flex gap-2 h-screen ">
            <div className="bg-chatBlue p-3 h-screen min-w-96 overflow-y-scroll  ">
              <Header />
              <div className="flex items-center mb-4 p-2 w-full rounded-lg shadow-[0px_4px_5px_2px_rgba(121,197,239,0.38)] bg-white">
                <IoSearchOutline className="text-gray-500 w-6 h-6" />
                <input
                  className="flex-grow pl-2 focus:outline-none"
                  type="search"
                  placeholder="Search..."
                  value={inputValue}
                  onChange={handleOnChange}
                />
              </div>
              <div className="flex flex-col  ">
                <div
                  onClick={clicked}
                  className="flex-1 overflow-auto bg-white rounded-xl shadow-[0px_4px_5px_2px_rgba(121,197,239,0.38)] ">
                  {filterdChats.length > 0 ? (
                    filterdChats.map((item) => (
                      <ChatCard
                        key={item.id}
                        data={item}
                        setCurrentChat={setCurrentChat}
                      />
                    ))
                  ) : (
                    <p className="text-center text-gray-500 mt-4">
                      No Search Results
                    </p>
                  )}
                </div>
              </div>
              {/* <ChatNavBar /> */}
            </div>
            <div className="flex-grow">
              <ChatWindow close={close} currentChat={currentChat} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-chatBlue p-3 lg:hidden min-w-[340px]">
            <Header />
            <div className="flex items-center mb-4 p-2 w-full rounded-lg shadow-[0px_4px_5px_2px_rgba(121,197,239,0.38)] bg-white">
              <IoSearchOutline className="text-gray-500 w-6 h-6" />
              <input
                className="flex-grow pl-2 focus:outline-none"
                type="search"
                placeholder="Search..."
                value={inputValue}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col  ">
              <div
                onClick={clicked}
                className="flex-1 overflow-auto bg-white rounded-xl shadow-[0px_4px_5px_2px_rgba(121,197,239,0.38)] ">
                {filterdChats.length > 0 ? (
                  filterdChats.map((item) => (
                    <ChatCard
                      key={item.id}
                      data={item}
                      setCurrentChat={setCurrentChat}
                    />
                  ))
                ) : (
                  <p className="text-center text-gray-500 mt-4">
                    No Search Results
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex gap-2 h-screen    ">
            <div className="bg-chatBlue p-3 h-screen min-w-96 overflow-y-scroll">
              <Header />
              <div className="flex items-center mb-4 p-2 w-full rounded-lg shadow-[0px_4px_5px_2px_rgba(121,197,239,0.38)] bg-white">
                <IoSearchOutline className="text-gray-500 w-6 h-6" />
                <input
                  className="flex-grow pl-2 focus:outline-none"
                  type="search"
                  placeholder="Search..."
                  value={inputValue}
                  onChange={handleOnChange}
                />
              </div>
              <div className="flex flex-col  ">
                <div
                  onClick={clicked}
                  className="flex-1 overflow-auto bg-white rounded-xl shadow-[0px_4px_5px_2px_rgba(121,197,239,0.38)] ">
                  {filterdChats.length > 0 ? (
                    filterdChats.map((item) => (
                      <ChatCard
                        key={item.id}
                        data={item}
                        setCurrentChat={setCurrentChat}
                      />
                    ))
                  ) : (
                    <p className="text-center  text-gray-500 mt-4">
                      No Search Results
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex-1">
              <ChatWindow close={close} currentChat={currentChat} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
