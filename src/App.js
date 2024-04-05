import "./styles.css";
import React, { useState } from "react";

const initialData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" },
];

export default function App() {
  const [data, setData] = useState(initialData);
  const [sortBy, setSortBy] = useState(null);

  const handleSortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA < dateB) return 1;
      if (dateA > dateB) return -1;
      // If dates are same, sort by views
      return b.views - a.views;
    });
    setData(sortedData);
    setSortBy("date");
  };

  const handleSortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views < b.views) return 1;
      if (a.views > b.views) return -1;
      // If views are same, sort by date
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });
    setData(sortedData);
    setSortBy("views");
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={handleSortByDate}>Sort by Date</button>
        <button onClick={handleSortByViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
