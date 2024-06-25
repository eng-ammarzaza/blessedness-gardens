export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "EUR" }).format(
    value
  );
// export function getToday() {
//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, "0");
//   var mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
//   var yyyy = today.getFullYear();

//   today = mm + "/" + dd + "/" + yyyy;
//   return today;
// }

const currentDateObj = new Date();
export const currentDate = currentDateObj.toISOString().split("T")[0];
const nextDateObj = new Date(currentDate);
nextDateObj.setDate(currentDateObj.getDate() + 1);
export const nextDate = nextDateObj.toISOString().split("T")[0];

export function nextDatee(date) {
  const nextDateObj = new Date(date);
  nextDateObj.setDate(new Date(date).getDate() + 1);
  const nextDate = nextDateObj.toISOString().split("T")[0];
  return nextDate;
}
