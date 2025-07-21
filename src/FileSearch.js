import React, { useState } from 'react';

const dummyFiles = [
  { name: "baby_photo.jpg", group: "Family", date: "2025-06-18", url: "#" },
  { name: "meeting_notes.pdf", group: "Work", date: "2025-06-17", url: "#" }
];

function FileSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(dummyFiles);

  const handleSearch = () => {
    const filtered = dummyFiles.filter(file =>
      file.name.toLowerCase().includes(query.toLowerCase()) ||
      file.group.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">LINE File Search</h1>

      <div className="flex mb-4 gap-2">
        <input
          className="border rounded p-2 flex-1"
          placeholder="Search by file name or group"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <table className="w-full border text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">File Name</th>
            <th className="p-2 border">Group</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Download</th>
          </tr>
        </thead>
        <tbody>
          {results.map((file, i) => (
            <tr key={i}>
              <td className="p-2 border">{file.name}</td>
              <td className="p-2 border">{file.group}</td>
              <td className="p-2 border">{file.date}</td>
              <td className="p-2 border">
                <a href={file.url} className="text-blue-500 underline">Download</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FileSearch;
