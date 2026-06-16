"use client";

import moment from "moment";

const QueryRow = ({ data , srNo }) => {
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
    </tr>
  );
};

export default QueryRow;
