import { useState } from 'react';
import './TagInput.css'; 

const TagInput = ({onTagsChange}) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      const newTags = [...tags, inputValue
        .trim()
        .toLowerCase()  
        .normalize('NFD')  
        .replace(/[\u0300-\u036f]/g, '')
      ];
      setTags(newTags);
      onTagsChange(newTags);
      setInputValue('');
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(newTags);
    onTagsChange(newTags);
  };

  const getBackgroundColor = (tag) => {
    // Simple hash function to generate a color based on the tag name
    let hash = 0;
    for (let i = 0; i < tag.length; i++) {
      hash = tag.charCodeAt(i) + ((hash << 5) - hash);
      
    }
    console.log(hash)
     // Generate a color
     const r = ((hash >> 24) & 0xFF) + 127; // Ensure it's a lighter color
     const g = ((hash >> 16) & 0xFF) + 127; // Ensure it's a lighter color
     const b = ((hash >> 8) & 0xFF) + 127;  // Ensure it's a lighter color
     return `rgb(${r % 256}, ${g % 256}, ${b % 256})`;
  };


  return (
    <div className="tag-input-container">

        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Java, Greenpad, ..."
            className="tag-input"
        />
        <ul className="tag-list">
            {tags.map((tag, index) => (
                <li 
                    key={index} 
                    className="tag" 
                    onClick={() => handleRemoveTag(index)}
                    style={{ backgroundColor: getBackgroundColor(tag) }}
                >
                    {tag}
                </li>
            ))}
        </ul>

    </div>
  );
};

export default TagInput;
