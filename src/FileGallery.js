import React, { useState, useEffect, useMemo } from 'react';

const files = [
  // Group Chat
  { name: "VMES.png", group: "VMES64", date: "2025-06-15", url: "#", chatType: "Group" },
  { name: "project_notes.docx", group: "Family", date: "2025-06-14", url: "#", chatType: "Group" },
  { name: "funny_meme.jpg", group: "Friends", date: "2025-06-13", url: "#", chatType: "Group" },

  // OpenChat
  { name: "travel_diary.pdf", group: "ABAC", date: "2025-06-11", url: "#", chatType: "OpenChat" },
  { name: "recipe_tomyum.jpg", group: "Dcondo", date: "2025-06-09", url: "#", chatType: "OpenChat" },
  { name: "community_event.jpg", group: "Food", date: "2025-06-04", url: "#", chatType: "OpenChat" },
];

const FileGallery = () => {
  const [query, setQuery] = useState('');
  const [chatTypeFilter, setChatTypeFilter] = useState('');
  const [groupFilter, setGroupFilter] = useState('');

  const availableGroups = useMemo(() => {
    return [...new Set(
      files
        .filter(file => chatTypeFilter === '' || file.chatType === chatTypeFilter)
        .map(file => file.group)
    )];
  }, [chatTypeFilter]);

  useEffect(() => {
    if (chatTypeFilter === '') {
      setGroupFilter('');
    } else {
      setGroupFilter(availableGroups[0] || '');
    }
  }, [chatTypeFilter, availableGroups]);

  const filteredFiles = files.filter(file =>
    (file.name.toLowerCase().includes(query.toLowerCase()) ||
      file.group.toLowerCase().includes(query.toLowerCase())) &&
    (chatTypeFilter === '' || file.chatType === chatTypeFilter) &&
    (groupFilter === '' || file.group === groupFilter)
  );

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-600 text-center mb-6">LINE Media Gallery</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-md"
          placeholder="Search by filename or group"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          className="p-2 border border-gray-300 rounded-md"
          value={chatTypeFilter}
          onChange={(e) => setChatTypeFilter(e.target.value)}
        >
          <option value="">All Chat Types</option>
          <option value="Group">Group Chat</option>
          <option value="OpenChat">OpenChat</option>
        </select>

        <select
          className="p-2 border border-gray-300 rounded-md"
          value={groupFilter}
          onChange={(e) => setGroupFilter(e.target.value)}
        >
          {chatTypeFilter === '' && <option value="">All Groups</option>}
          {availableGroups.map((group, idx) => (
            <option key={idx} value={group}>{group}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredFiles.map((file, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            {file.name.match(/\.(jpg|png)$/i) ? (
              <div className="h-48 bg-gray-100">
                <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="h-48 flex items-center justify-center bg-gray-100 text-gray-400 text-xl">
                {file.name.split('.').pop().toUpperCase()}
              </div>
            )}
            <div className="p-4">
              <h2 className="font-semibold">{file.name}</h2>
              <p className="text-sm text-gray-600">
                {file.date} • {file.chatType} • {file.group}
              </p>
              <a href={file.url} className="text-green-500 mt-2 inline-block underline">Download</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileGallery;
