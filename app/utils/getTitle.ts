export const getTitle = (gender?: string, maritalStatus?: string) => {
  if (gender === "Male") {
    return "Mr";
  }
  if (gender === "Female") {
    return maritalStatus === "Married" ? "Mrs" : "Ms";
  } else {
    return "";
  }
};
