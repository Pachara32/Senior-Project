import React, { useState, useMemo } from 'react';

const files = [
  { name: "group_photo.jpg", group: "Family", date: "2025-06-18", url: "#", chatType: "Group", fileType: "Image" },
  { name: "meeting.mp4", group: "WorkTeam", date: "2025-06-17", url: "#", chatType: "Group", fileType: "Video" },
  { name: "document.pdf", group: "StudyGroup", date: "2025-06-16", url: "#", chatType: "Group", fileType: "PDF" },
  { name: "notes.txt", group: "ClassA", date: "2025-06-15", url: "#", chatType: "Group", fileType: "Other" },
  { name: "funny_meme.png", group: "CloseFriends", date: "2025-06-14", url: "#", chatType: "Group", fileType: "Image" },
  { name: "project.zip", group: "Marketing", date: "2025-06-13", url: "#", chatType: "Group", fileType: "Other" },
  { name: "presentation.pdf", group: "Community", date: "2025-06-12", url: "#", chatType: "Group", fileType: "PDF" },
  { name: "dance_video.mp4", group: "Friends", date: "2025-06-11", url: "#", chatType: "Group", fileType: "Video" },
  { name: "poster.jpg", group: "VMES64", date: "2025-06-10", url: "#", chatType: "Group", fileType: "Image" },
  { name: "todo.docx", group: "BusinessClub", date: "2025-06-09", url: "#", chatType: "Group", fileType: "Other" },
];

const FileGallery = () => {
  const [query, setQuery] = useState('');
  const [groupFilter, setGroupFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const availableGroups = useMemo(() => {
    return [...new Set(files.map(file => file.group))];
  }, []);

  const fileTypeOptions = ['File Type', 'Image', 'Video', 'PDF', 'Other'];

  const filteredFiles = files.filter(file =>
    (file.name.toLowerCase().includes(query.toLowerCase()) ||
      file.group.toLowerCase().includes(query.toLowerCase())) &&
    (groupFilter === '' || file.group === groupFilter) &&
    (typeFilter === '' || file.fileType === typeFilter)
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
          value={groupFilter}
          onChange={(e) => setGroupFilter(e.target.value)}
        >
          <option value="">All Groups</option>
          {availableGroups.map((group, idx) => (
            <option key={idx} value={group}>{group}</option>
          ))}
        </select>

        <select
          className="p-2 border border-gray-300 rounded-md"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          {fileTypeOptions.map((type, idx) => (
            <option key={idx} value={type === 'All' ? '' : type}>{type}</option>
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
                {file.date} • {file.group} • {file.fileType}
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
