import "./BookListing.css"

const BookListing = ({ title, dueDate }) => {
  const isOverdue = Date.parse(dueDate) < Date.now()

  return (
    <div className="BookListing">
      <h2>{title}</h2>
      {
        isOverdue
          ? <span className="alert badge">Overdue!</span>
          : null
      }
    </div>
  )
}

export default BookListing
