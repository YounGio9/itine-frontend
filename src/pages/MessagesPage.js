import React, { useEffect } from 'react';
import { getChats, getMessages, reply } from '../services/message.service';
import Loading from '../components/UI/Loading';
import search from '../assets/search.png';

// import { getMessages } from '../../services/messages.service';

export default function MessagePage() {
  const [loading, setLoading] = React.useState(true);
  const [messages, setMessages] = React.useState([]);

  const [replyBody, setReplyBody] = React.useState('');

  const [currentChat, setCurrentChat] = React.useState();

  const getChts = async () => {
    const data = await getChats();
    setLoading(false);
    console.log(data);
    setMessages(data.data.reverse());
  };
  const handleReply = async () => {

    console.log({
      email: currentChat.user,
      subject: currentChat.messages[0].subject,
      body: replyBody,
    })
    const response = await reply({
      email: currentChat.user,
      subject: currentChat.messages[0].subject,
      body: replyBody,
    });
    console.log(response);
    getChts();
  };

  React.useEffect(() => {
    getChts();
  }, []);

  useEffect(() => {
    if (messages.length) setCurrentChat(messages[0]);
  }, [messages]);

  React.useMemo(() => {
    console.log(messages);
  }, [messages]);
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
            <div className="border-r border-gray-300 lg:col-span-1">
              <div className="relative text-gray-600 mx-3 my-3">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <img src={search} alt="search" className="w-6" />
                </div>
                <input
                  type="search"
                  className="block w-full py-2 pl-10 bg-gray-100 rounded outline-none"
                  name="search"
                  placeholder="Rechercher"
                  required=""
                />
              </div>
              <ul className="overflow-auto h-auto">
                {loading && <Loading />}
                <li className=" mt-10">
                  {messages &&
                    messages.map((msg) => (
                      <button
                        type="button"
                        key={msg.user}
                        onClick={() => setCurrentChat(msg)}
                        className="flex w-full items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-t border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none"
                      >
                        <div className="text-start w-full pb-2">
                          <h3 className="block ml-2 font-semibold text-red-600">
                            message de {msg.messages[0].senderMail}{' '}
                          </h3>
                          <h4 className="block ml-2 text-sm text-gray-600">Mail: {msg.user} </h4>
                        </div>
                      </button>
                    ))}
                </li>
              </ul>
            </div>
            <div className="hidden lg:col-span-2 lg:block">
              <div className="w-full">
                <div className="relative flex items-center p-3 border-b border-gray-300">
                  <span className="block ml-5 font-bold text-gray-600">{currentChat?.messages[0].senderName}</span>
                  {/* <span className="absolute w-3 h-3 bg-green-600 rounded-full top-4"></span> */}
                </div>
                <div className="relative w-full p-6 overflow-y-auto h-96">
                  <ul className="space-y-2">
                    {currentChat &&
                      currentChat.messages.map((msg) =>
                        msg.senderName !== 'Admin' ? (
                          <li className="flex justify-start">
                            <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                              <span className="block">{msg.body}</span>
                            </div>
                          </li>
                        ) : (
                          <li className="flex justify-end">
                            <div className="relative bg-red-100 max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                              <span className="block">{msg.body}</span>
                            </div>
                          </li>
                        )
                      )}

                    {/* <li className="flex justify-end">
                      <div className="relative max-w-xl bg-red-100 px-4 py-2 text-gray-700 rounded shadow">
                        <span className="block">how are you?</span>
                      </div>
                    </li>

                    <li className="flex justify-start">
                      <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                        <span className="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                      </div>
                    </li> */}
                  </ul>
                </div>
                <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
                  <input
                    type="text"
                    placeholder="Message"
                    className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                    name="message"
                    onChange={(e) => setReplyBody(e.target.value)}
                    value={replyBody}
                    required=""
                  />

                  <button type="submit" onClick={handleReply}>
                    <svg
                      className="w-8 h-8 text-gray-500 origin-center transform rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}