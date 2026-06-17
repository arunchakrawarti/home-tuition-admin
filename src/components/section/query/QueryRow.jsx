"use client";

import moment from "moment";

const QueryRow = ({ data , srNo ,handleDelete }) => {
  const { _id, name, mobile, email, message, source, createdAt } = data;

  return (
    <tr key={_id} className="border-b hover:bg-gray-50 transition">
              <td className="px-4 py-3 font-medium text-gray-900">{srNo}</td>

      <td className="px-4 py-3 font-medium text-gray-900">{name}</td>

      <td className="px-4 py-3 text-center">{mobile}</td>

      <td className="px-4 py-3">{email}</td>

      <td className="px-4 py-3 max-w-[250px]">
        <p className="line-clamp-2">{message}</p>
      </td>

      <td className="px-4 py-3 text-center">
        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
          {source}
        </span>
      </td>

      <td className="px-4 py-3 text-center">
        {moment(createdAt).format("DD MMM YY")}
      </td>
      <td className="px-4 py-3 text-center">
  <button
    onClick={() => handleDelete(data._id)}
    className="hover:bg-red-100 transition-all duration-100 rounded-lg p-2 text-red-500"
  >
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1.1em"
      width="1.1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M17 6V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2H3v2h1v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8h1V6h-4zM9 5h6v1H9V5zm9 14H6V8h12v11zM9 10h2v6H9zm4 0h2v6h-2z"></path>
    </svg>
  </button>
</td>
    </tr>
  );
};

export default QueryRow;
