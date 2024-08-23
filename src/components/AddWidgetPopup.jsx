import React, { useState } from 'react';
import '../App.css'; 

const AddWidgetPopup = ({ show, onClose, onAddWidget }) => {
  const [category, setCategory] = useState('cspm');
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [widgetType, setWidgetType] = useState('bar');
  const [widgetData, setWidgetData] = useState('');

  if (!show) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      name: widgetName,
      text: widgetText,
      graph: {
        type: widgetType,
        data: widgetData.split(',').map(item => item.trim()),
      },
    };

    onAddWidget(category, newWidget);

    setCategory('cspm');
    setWidgetName('');
    setWidgetText('');
    setWidgetType('bar');
    setWidgetData('');

    
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Add Widget</h2>
        <p>Personalize your dashboard by adding the following widgets:</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="cspm">CSPM</option>
              <option value="cwpp">CWPP</option>
              <option value="risk">Risk</option>
              <option value="ticket">Ticket</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="widgetName">Widget Name</label>
            <input
              type="text"
              id="widgetName"
              name="widgetName"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="widgetText">Widget Text</label>
            <input
              type="text"
              id="widgetText"
              name="widgetText"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit">Add Widget</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetPopup;
