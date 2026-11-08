// Section 03 — Values, truthiness and expressions

// "Full", "1 seat left", or "12 seats left".
export function seatLabel(course) {
      let availSeats = course.seatsLeft;
      if(availSeats===0){
          return "Full";
      }
      else if (availSeats===1) {
          return `${availSeats} seat left`;
        
      } 
      else {
        return `${availSeats} seats left`;
      }
}

// The course's description, or "No description yet." ONLY when it is
// null or undefined. An empty string "" is a real value and is kept.
export function descriptionOrDefault(course) {
    let courseDesc = course.description;
    if(courseDesc == null){
        return "No description yet.";
    }
    else{
      return courseDesc;
    }

}

// "3 in planner" for a positive count, and null (not 0, not "") for zero.
export function plannerBadge(count) {
    if(count===0){
      return null;
    }
    return `${count} in planner`;
}
