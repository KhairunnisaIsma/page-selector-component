import React, { useState } from 'react';

function App() {
  const [pages, setPages] = useState([
    { id: 1, name: 'Page 1', isChecked: false },
    { id: 2, name: 'Page 2', isChecked: false },
    { id: 3, name: 'Page 3', isChecked: false },
    { id: 4, name: 'Page 4', isChecked: false },
  ]);

  // Handle klik "All pages"
  const handleAllPagesChange = (e) => {
    const isChecked = e.target.checked;
    setPages(pages.map(page => ({ ...page, isChecked })));
  };

  // Handle klik idividual page
  const handlePageChange = (id) => {
    setPages(pages.map(page => 
      page.id === id ? { ...page, isChecked: !page.isChecked } : page
    ));
  };

  const isAllSelected = pages.length > 0 && pages.every(page => page.isChecked);

  return (
    <div className="card">
      {/* Header: All Pages */}
      <div className="list-item" onClick={() => handleAllPagesChange({ target: { checked: !isAllSelected } })}>
        <label>All pages</label>
        <div className="custom-checkbox">
          <input 
            type="checkbox" 
            checked={isAllSelected} 
            onChange={handleAllPagesChange} 
          />
          <span className="checkmark"></span>
        </div>
      </div>

      <hr className="divider" />

      {/* List Pages */}
      <div className="pages-list">
        {pages.map((page) => (
          <div key={page.id} className="list-item" onClick={() => handlePageChange(page.id)}>
            <label>{page.name}</label>
            <div className="custom-checkbox">
              <input 
                type="checkbox" 
                checked={page.isChecked} 
                onChange={() => handlePageChange(page.id)}
              />
              <span className="checkmark"></span>
            </div>
          </div>
        ))}
      </div>

      <hr className="divider" />

      {/* Button */}
      <button className="btn-done" onClick={() => alert('Done clicked!')}>
        Done
      </button>
    </div>
  );
}

export default App;
