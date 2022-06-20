import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const data = props.items;

  return (
    <Card className="expenses">
      <ExpenseItem
        title={data[0].title}
        amount={data[0].amount}
        date={data[0].date}
      />
      <ExpenseItem
        title={data[1].title}
        amount={data[1].amount}
        date={data[1].date}
      />
      <ExpenseItem
        title={data[2].title} 
        amount={data[2].amount}
        date={data[2].date}
      />
      <ExpenseItem
        title={data[3].title}
        amount={data[3].amount}
        date={data[3].date}
      />
    </Card>
  );
}
export default Expenses;
