import React, { useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './components/data2';
import './maindin.css';
const allCategories = ['all', ...new Set(items.map(item => item.category))];

function Maindin() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className='menu-din'>
        
        <Categories categories={allCategories} filterItems={filterItems} />
        <div className='span'><Menu  items={menuItems}  /></div>
      </section>
    </main>
  );
}

export default Maindin;
