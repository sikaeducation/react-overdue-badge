import "./BookListing.css"

const BookListingWithDaysRemaining = ({ title, daysRemaining }) => {
  const isOverdue = daysRemaining <= 0

  return (
    <div className="BookListing">
      <h2>{title}</h2>
      {
        isOverdue
          ? <span className="alert badge">Overdue!</span>
          : <span className="badge">{daysRemaining} days remaining</span>
      }
    </div>
  )
}

export default BookListingWithDaysRemaining
