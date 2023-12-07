import React from "react";

export default function Table({ dataTable }) {
  return (
    <table className="w-1/2 bg-slate-100 shadow-md">
      <thead>
        <tr>
          <th className="border border-gray-500 px-4 py-2">ID</th>
          <th className="border border-gray-500 px-4 py-2">Name</th>
          <th className="border border-gray-500 px-4 py-2">Job</th>
        </tr>
      </thead>
      <tbody>
        {dataTable?.map((user) => (
          <tr key={user.id}>
            <td className="border border-gray-500 px-4 py-2">{user.id}</td>
            <td className="border border-gray-500 px-4 py-2">{user.name}</td>
            <td className="border border-gray-500 px-4 py-2">{user.job}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
