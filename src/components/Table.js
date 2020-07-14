import React, { useState, useEffect } from "react";
import { Row, Table } from "antd";

const BookList = () =>  {
  const [ error, setError ] = useState(null)
  const [ isLoaded, setIsLoaded ] = useState(false)
  const [ listBook, setListBook ] = useState([])
  useEffect(() => {
    getListBook();
  }, []);
  const getListBook = async () => {
    const url = "https://27adented-dramatic-knuckle.glitch.me/api/book";
    try {
      let response = await fetch(url);
      let data = await response.json();
      setIsLoaded(true)
      setListBook(data.data)
    } catch (error) {
      alert(error); // TypeError: failed to fetch
      setError(error)
      setIsLoaded(true)
    }
  }
    const { Column } = Table;
    const newListBook = listBook.map((book, index) => {
      book.index = index + 1;
      return book
    })
    console.log(newListBook)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style={{marginTop: '50px'}}>
          <Row justify='center'>
            <Table dataSource={newListBook} pagination={{ defaultPageSize: 5}} style={{width: '80%'}}>
              <Column title="Index" dataIndex="index" key="index" />
              <Column title="Book" dataIndex="title" key="title" />
              <Column 
                title="Book Cover" 
                dataIndex="bookCoverUrl" 
                key="bookCoverUrl"
                render={theImageURL  => (
                  <img alt={theImageURL} src={theImageURL} style={{ width: "30px" }}/>
                )}
              />
            </Table>
          </Row>
        </div>
      );
    }
  }

export default BookList;
