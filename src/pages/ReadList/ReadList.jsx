import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utilitiy/addToDB';
import Book from '../Book/Book';


const ReadList = () => {
  const books = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBook = storedBookData.map((id) => parseInt(id));
    const myReadList = books.filter((book) =>
      convertedStoredBook.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === 'Pages') {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    }
    if (type === 'Rating') {
      const sortedByrating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByrating);
    }
  };
  return (
    <>
      <div className="text-center">
        <details className="dropdown">
          <summary className="btn m-1">Sort By: {sort ? sort : ''}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort('Pages')}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort('Rating')}>Rating</a>
            </li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Read List {readList.length}</h2>
          <div>
            {readList.map((b) => (
              <Book key={b.bookId} book={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Wish List</h2>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ReadList;
