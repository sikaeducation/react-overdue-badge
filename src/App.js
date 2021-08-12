import "./App.css"
import BookListing from "./BookListing"
import BookListingWithDaysRemaining from "./BookListingWithDaysRemaining"

const App = () => {
  return (
    <div className="App">
      <h1>Currently checked out:</h1>
      <BookListing title="A Tale Of Two Cities" dueDate="2021-07-01" />
      <BookListing title="Wuthering Heights" dueDate="2022-07-01" />
      <BookListingWithDaysRemaining title="Of Mice and Men" daysRemaining="3" />
      <BookListingWithDaysRemaining title="The Great Gatsby" daysRemaining="-1" />
    </div>
  )
}

export default App
